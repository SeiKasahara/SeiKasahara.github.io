import { type CollectionEntry, getCollection } from "astro:content";
import { getCategoryUrl } from "@utils/url-utils.ts";
import { type BlogPostData } from "../types/config";
import { defaultLang, languages, type Lang } from "@/i18n";

type RawPost = CollectionEntry<"posts">;

// Derive baseSlug and entry language from the file id (e.g. "lwng.en.md").
// Using `entry.id` rather than `entry.slug` avoids the default slug generator
// munging dots (e.g. mapping "lwng.en" → "lwng-en") and splitting siblings
// apart. Convention: "<name>.<lang>.md" is a translation of "<name>.md";
// frontmatter `lang` still wins over filename inference.
export function parseEntryLang(entry: RawPost): {
	baseSlug: string;
	entryLang: Lang;
} {
	const supported = Object.keys(languages) as Lang[];
	// Drop the extension; Astro content file ids are posix-style paths.
	const idNoExt = entry.id.replace(/\.(md|mdx)$/i, "");
	const match = idNoExt.match(/^(.+)\.([a-z]{2})$/i);
	let baseSlug = idNoExt;
	let suffixLang: Lang | undefined;
	if (match && (supported as string[]).includes(match[2].toLowerCase())) {
		baseSlug = match[1];
		suffixLang = match[2].toLowerCase() as Lang;
	}
	const frontmatterLang = entry.data.lang as Lang | undefined;
	const entryLang: Lang =
		frontmatterLang && frontmatterLang !== defaultLang
			? frontmatterLang
			: (suffixLang ?? frontmatterLang ?? defaultLang);
	return { baseSlug, entryLang };
}

export type LocalizedPost = Omit<RawPost, "slug"> & {
	slug: string;
	entryLang: Lang;
	requestedLang: Lang;
	isFallback: boolean;
	prevSlug: string;
	prevTitle: string;
	nextSlug: string;
	nextTitle: string;
};

export type LocalizedPostSummary = {
	slug: string;
	data: RawPost["data"];
	entryLang: Lang;
	isFallback: boolean;
};

async function getLocalizedRawPosts(lang: Lang): Promise<LocalizedPost[]> {
	const all = await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	// Group entries sharing the same baseSlug (i.e., the same post across its
	// available language variants). For each requested lang we pick the best
	// entry in the group: exact lang match wins; otherwise the default-lang
	// (zh) original is shown as a marked fallback. This means a zh post with a
	// real translation stops appearing on /en/ — the en entry displaces it —
	// but untranslated zh posts still surface under /en/ and /ja/ with a
	// "not yet translated" banner.
	const groups = new Map<string, RawPost[]>();
	for (const entry of all) {
		const { baseSlug } = parseEntryLang(entry);
		const bucket = groups.get(baseSlug) ?? [];
		bucket.push(entry);
		groups.set(baseSlug, bucket);
	}

	const picked: LocalizedPost[] = [];
	for (const [baseSlug, entries] of groups) {
		let chosen: RawPost | undefined;
		let chosenLang: Lang = defaultLang;
		let isFallback = false;

		for (const e of entries) {
			const { entryLang } = parseEntryLang(e);
			if (entryLang === lang) {
				chosen = e;
				chosenLang = entryLang;
				break;
			}
		}
		if (!chosen) {
			for (const e of entries) {
				const { entryLang } = parseEntryLang(e);
				if (entryLang === defaultLang) {
					chosen = e;
					chosenLang = entryLang;
					isFallback = true;
					break;
				}
			}
		}
		if (!chosen) {
			chosen = entries[0];
			chosenLang = parseEntryLang(chosen).entryLang;
			isFallback = true;
		}

		const source = chosen;
		picked.push({
			...source,
			slug: baseSlug,
			// Preserve render through the wrapper: spread may lose prototype
			// methods and Astro's binding depending on entry shape.
			render: () => source.render(),
			entryLang: chosenLang,
			requestedLang: lang,
			isFallback,
			prevSlug: "",
			prevTitle: "",
			nextSlug: "",
			nextTitle: "",
		});
	}

	picked.sort((a, b) => {
		if (a.data.pinned && !b.data.pinned) return -1;
		if (!a.data.pinned && b.data.pinned) return 1;
		const dateA = new Date(a.data.published);
		const dateB = new Date(b.data.published);
		return dateA > dateB ? -1 : 1;
	});

	return picked;
}

export async function getLocalizedPosts(lang: Lang): Promise<LocalizedPost[]> {
	const sorted = await getLocalizedRawPosts(lang);
	for (let i = 1; i < sorted.length; i++) {
		sorted[i].nextSlug = sorted[i - 1].slug;
		sorted[i].nextTitle = sorted[i - 1].data.title;
	}
	for (let i = 0; i < sorted.length - 1; i++) {
		sorted[i].prevSlug = sorted[i + 1].slug;
		sorted[i].prevTitle = sorted[i + 1].data.title;
	}
	return sorted;
}

export async function getLocalizedPostsList(
	lang: Lang,
): Promise<LocalizedPostSummary[]> {
	const sorted = await getLocalizedRawPosts(lang);
	return sorted.map((p) => ({
		slug: p.slug,
		data: p.data,
		entryLang: p.entryLang,
		isFallback: p.isFallback,
	}));
}

// // Retrieve posts and sort them by publication date
async function getRawSortedPosts() {
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const sorted = allBlogPosts.sort((a, b) => {
	    if (a.data.pinned && !b.data.pinned) return -1;
	    if (!a.data.pinned && b.data.pinned) return 1;
		const dateA = new Date(a.data.published);
		const dateB = new Date(b.data.published);
		return dateA > dateB ? -1 : 1;
	});
	return sorted;
}

export async function getSortedPosts() {
	const sorted = await getRawSortedPosts();

	for (let i = 1; i < sorted.length; i++) {
		sorted[i].data.nextSlug = sorted[i - 1].slug;
		sorted[i].data.nextTitle = sorted[i - 1].data.title;
	}
	for (let i = 0; i < sorted.length - 1; i++) {
		sorted[i].data.prevSlug = sorted[i + 1].slug;
		sorted[i].data.prevTitle = sorted[i + 1].data.title;
	}

	return sorted;
}
export type PostForList = {
	slug: string;
	data: CollectionEntry<"posts">["data"];
};
export async function getSortedPostsList(): Promise<PostForList[]> {
	const sortedFullPosts = await getRawSortedPosts();
	// delete post.body
	const sortedPostsList = sortedFullPosts.map((post) => ({
		slug: post.slug,
		data: post.data,
	}));

	return sortedPostsList;
}
export type Tag = {
	name: string;
	count: number;
};

export async function getTagList(): Promise<Tag[]> {
	const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const countMap: { [key: string]: number } = {};
	allBlogPosts.forEach((post: { data: { tags: string[] } }) => {
		post.data.tags.forEach((tag: string) => {
			if (!countMap[tag]) countMap[tag] = 0;
			countMap[tag]++;
		});
	});

	// sort tags
	const keys: string[] = Object.keys(countMap).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	return keys.map((key) => ({ name: key, count: countMap[key] }));
}

export type Category = {
	name: string;
	count: number;
	url: string;
};

export async function getCategoryList(lang?: string): Promise<Category[]> {
	const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
	const count: { [key: string]: number } = {};
	allBlogPosts.forEach((post: { data: { category: string | null } }) => {
		if (!post.data.category) {
			// 不再为未分类的文章创建"未分类"分类
			return;
		}

		const categoryName =
			typeof post.data.category === "string"
				? post.data.category.trim()
				: String(post.data.category).trim();

		count[categoryName] = count[categoryName] ? count[categoryName] + 1 : 1;
	});

	const lst = Object.keys(count).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	const ret: Category[] = [];
	for (const c of lst) {
		ret.push({
			name: c,
			count: count[c],
			url: getCategoryUrl(c, lang),
		});
	}
	return ret;
}

export async function getPostSeries(
  seriesName: string,
): Promise<{ body: string; data: BlogPostData; slug: string }[]> {
  const posts = (await getCollection('posts', ({ data }) => {
    return (
      (import.meta.env.PROD ? data.draft !== true : true) &&
      data.series === seriesName
    )
  })) as unknown as { body: string; data: BlogPostData; slug: string }[]

  posts.sort((a, b) => {
    const dateA = new Date(a.data.published)
    const dateB = new Date(b.data.published)
    return dateA > dateB ? 1 : -1
  })

  return posts
}
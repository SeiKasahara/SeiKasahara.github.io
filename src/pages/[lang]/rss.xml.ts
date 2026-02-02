import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { siteConfig } from '@/config';
import { parse as htmlParser } from 'node-html-parser';
import { getImage } from 'astro:assets';
import type { APIContext, ImageMetadata } from 'astro';
import type { RSSFeedItem } from '@astrojs/rss';
import { getSortedPosts } from '@/utils/content-utils';
import path from 'node:path';
import { languages, getHtmlLang, type Lang } from '@/i18n';

const markdownParser = new MarkdownIt();

function stripInvalidXmlChars(str: string): string {
	return str.replace(
		// biome-ignore lint/suspicious/noControlCharactersInRegex: https://www.w3.org/TR/xml/#charsets
		/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]/g,
		"",
	);
}

const imagesGlob = import.meta.glob<{ default: ImageMetadata }>(
	'/src/content/**/*.{jpeg,jpg,png,gif,webp}',
);

// RSS feed titles by language
const RSS_TITLES: Record<Lang, string> = {
	zh: siteConfig.title,
	en: siteConfig.title,
	ja: siteConfig.title,
};

// RSS feed language codes
const RSS_LANG_CODES: Record<Lang, string> = {
	zh: 'zh-CN',
	en: 'en',
	ja: 'ja',
};

export function getStaticPaths() {
	return Object.keys(languages).map((lang) => ({
		params: { lang },
	}));
}

export async function GET(context: APIContext) {
	if (!context.site) {
		throw Error('site not set');
	}

	const { lang } = context.params as { lang: Lang };
	const langCode = RSS_LANG_CODES[lang] || 'zh-CN';

	const posts = await getSortedPosts();
	const feed: RSSFeedItem[] = [];

	for (const post of posts) {
		const cleanedBody = stripInvalidXmlChars(post.body);

		const htmlString = markdownParser.render(cleanedBody);

		const html = htmlParser.parse(htmlString);

		const images = html.querySelectorAll('img');
		for (const img of images) {
			const src = img.getAttribute('src');
			if (!src) continue;

			if (src.startsWith('./') || src.startsWith('../')) {
				let importPath: string | null = null;

				if (src.startsWith('./')) {
					const postDir = path.dirname(post.id);
					const prefixRemoved = src.slice(2);
					importPath = `/src/content/posts/${postDir}/${prefixRemoved}`;
				} else {
					const postDir = path.dirname(post.id);
					const cleaned = src.replace(/^\.\.\//, '');
					const parentDir = path.dirname(postDir);
					importPath = `/src/content/posts/${parentDir === '.' ? '' : parentDir + '/'}${cleaned}`;
				}

				importPath = path.normalize(importPath).replace(/\\/g, '/');

				try {
					const imageMod = await imagesGlob[importPath]?.();
					if (imageMod) {
						const optimizedImg = await getImage({ src: imageMod.default, format: 'webp' });
						img.setAttribute('src', new URL(optimizedImg.src, context.site).href);
					} else {
						img.setAttribute('src', new URL(src, context.site).href);
					}
				} catch {
					img.setAttribute('src', new URL(src, context.site).href);
				}
			} else if (src.startsWith('/')) {
				img.setAttribute('src', new URL(src, context.site).href);
			} else if (src.startsWith('http')) {
				continue;
			}
		}

		const processedHtml = html.toString();

		const finalContent = stripInvalidXmlChars(processedHtml);

		feed.push({
			title: stripInvalidXmlChars(post.data.title),
			description: stripInvalidXmlChars(post.data.description || ''),
			pubDate: post.data.published,
			link: `/${lang}/posts/${post.slug}/`,
			content: sanitizeHtml(finalContent, {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
				allowedAttributes: {
					...sanitizeHtml.defaults.allowedAttributes,
					img: ['src', 'alt', 'title', 'width', 'height', 'loading']
				}
			}),
		});
	}

	return rss({
		title: RSS_TITLES[lang] || siteConfig.title,
		description: siteConfig.subtitle || 'No description',
		site: context.site,
		items: feed,
		customData: `<language>${langCode}</language>`,
	});
}

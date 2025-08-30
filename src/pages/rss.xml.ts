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
import { getDir } from '@/utils/url-utils';

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

export async function GET(context: APIContext) {
	if (!context.site) {
		throw Error('site not set');
	}

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
					// 获取文章所在的目录
					const postDir = getDir(post.id);
					const prefixRemoved = src.slice(2);
					// 构建正确的路径：/src/content/posts/{postDir}/{imageName}
					importPath = `/src/content/posts/${postDir}${prefixRemoved}`;
				} else {
					// 处理 ../image.jpg 的情况
					const postDir = getDir(post.id);
					const cleaned = src.replace(/^\.\.\//, '');
					// 向上一级目录
					const parentDir = path.dirname(postDir.slice(0, -1)); // 移除末尾的/，然后获取父目录
					importPath = `/src/content/posts/${parentDir === '.' ? '' : parentDir + '/'}${cleaned}`;
				}

				try {
					const imageMod = await imagesGlob[importPath]?.()?.then((res) => res.default);
					if (imageMod) {
						const optimizedImg = await getImage({ src: imageMod });
						img.setAttribute('src', new URL(optimizedImg.src, context.site).href);
					} else {
						console.warn(`Image not found in glob: ${importPath}`);
						// 降级为相对URL
						img.setAttribute('src', new URL(src, context.site).href);
					}
				} catch (error) {
					console.warn(`Failed to process image: ${importPath}`, error);
					img.setAttribute('src', new URL(src, context.site).href);
				}
			} else if (src.startsWith('/')) {
				img.setAttribute('src', new URL(src, context.site).href);
			}
		}

		const processedHtml = html.toString();
		
		const finalContent = stripInvalidXmlChars(processedHtml);

		feed.push({
			title: stripInvalidXmlChars(post.data.title),
			description: stripInvalidXmlChars(post.data.description || ''),
			pubDate: post.data.published,
			link: `/posts/${post.slug}/`,
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
		title: siteConfig.title,
		description: siteConfig.subtitle || 'No description',
		site: context.site,
		items: feed,
		customData: `<language>zh-CN</language>`,
	});
}

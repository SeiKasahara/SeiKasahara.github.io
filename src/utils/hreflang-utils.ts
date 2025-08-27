import { siteConfig } from "@/config";

// 支持的语言映射
export const supportedLanguages = {
	'zh_CN': 'zh-CN',
	'zh_TW': 'zh-TW', 
	'en': 'en',
	'ja': 'ja',
	'ko': 'ko',
	'es': 'es',
	'th': 'th'
} as const;

export type SupportedLanguage = keyof typeof supportedLanguages;

/**
 * 生成页面的多语言替代链接
 * @param currentPath 当前页面路径 (如: /posts/my-post/)
 * @param availableLanguages 可用的语言列表
 * @returns hreflang 链接数组
 */
export function generateAlternateLanguages(
	currentPath: string,
	availableLanguages: SupportedLanguage[] = ['zh_CN', 'en']
): { lang: string; url: string }[] {
	const baseUrl = 'https://fuwari.oh1.top/'; // 从astro.config.mjs中获取
	
	return availableLanguages.map(lang => {
		// 为不同语言生成URL
		// 这里可以根据你的URL结构调整
		// 例如: /en/posts/my-post/ 或 /posts/my-post/?lang=en
		let langPath = currentPath;
		
		// 如果不是默认语言，添加语言前缀
		if (lang !== siteConfig.lang) {
			const langCode = supportedLanguages[lang];
			langPath = `/${langCode}${currentPath}`;
		}
		
		return {
			lang,
			url: new URL(langPath, baseUrl).href
		};
	});
}

/**
 * 为博客文章生成hreflang链接
 * @param slug 文章slug
 * @param availableLanguages 文章支持的语言
 */
export function generatePostAlternateLanguages(
	slug: string,
	availableLanguages: SupportedLanguage[] = ['zh_CN', 'en']
): { lang: string; url: string }[] {
	return generateAlternateLanguages(`/posts/${slug}/`, availableLanguages);
}

/**
 * 为静态页面生成hreflang链接
 * @param pageName 页面名称 (如: 'about', 'archive')
 * @param availableLanguages 页面支持的语言
 */
export function generatePageAlternateLanguages(
	pageName: string,
	availableLanguages: SupportedLanguage[] = ['zh_CN', 'en']
): { lang: string; url: string }[] {
	return generateAlternateLanguages(`/${pageName}/`, availableLanguages);
}

/**
 * 检查语言代码是否受支持
 */
export function isSupportedLanguage(lang: string): lang is SupportedLanguage {
	return lang in supportedLanguages;
}

/**
 * 将内部语言代码转换为标准的hreflang代码
 */
export function normalizeLanguageCode(lang: string): string {
	if (isSupportedLanguage(lang)) {
		return supportedLanguages[lang];
	}
	return lang.replace('_', '-');
}
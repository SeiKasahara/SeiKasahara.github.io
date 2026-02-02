import zh from './translations/zh.json';
import en from './translations/en.json';
import ja from './translations/ja.json';

export const languages = {
  zh: '中文',
  en: 'English',
  ja: '日本語',
} as const;

export const defaultLang = 'zh' as const;

export type Lang = keyof typeof languages;

export const translations = {
  zh,
  en,
  ja,
} as const;

type TranslationKeys = typeof zh;

/**
 * Get the language code from a URL pathname
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
    return lang as Lang;
  }
  return defaultLang;
}

/**
 * Get the language code from a pathname string
 */
export function getLangFromPath(pathname: string): Lang {
  const [, lang] = pathname.split('/');
  if (lang in languages) {
    return lang as Lang;
  }
  return defaultLang;
}

/**
 * Create a translation function for a specific language
 */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let result: unknown = translations[lang];

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        // Fallback to default language
        result = translations[defaultLang];
        for (const fallbackKey of keys) {
          if (result && typeof result === 'object' && fallbackKey in result) {
            result = (result as Record<string, unknown>)[fallbackKey];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }

    return typeof result === 'string' ? result : key;
  };
}

/**
 * Get the URL for a different language version of the current page
 */
export function getLocalizedUrl(pathname: string, targetLang: Lang): string {
  const currentLang = getLangFromPath(pathname);

  // If current path starts with a language prefix
  if (pathname.startsWith(`/${currentLang}/`) || pathname === `/${currentLang}`) {
    return pathname.replace(`/${currentLang}`, `/${targetLang}`);
  }

  // If no language prefix (shouldn't happen with prefixDefaultLocale: true)
  return `/${targetLang}${pathname}`;
}

/**
 * Remove the language prefix from a pathname
 */
export function removeLanguagePrefix(pathname: string): string {
  const lang = getLangFromPath(pathname);
  if (pathname.startsWith(`/${lang}/`)) {
    return pathname.slice(lang.length + 1);
  }
  if (pathname === `/${lang}`) {
    return '/';
  }
  return pathname;
}

/**
 * Get all language versions of a URL for hreflang tags
 */
export function getHreflangUrls(pathname: string, siteUrl: string): { lang: Lang; url: string }[] {
  const basePath = removeLanguagePrefix(pathname);

  return Object.keys(languages).map((lang) => ({
    lang: lang as Lang,
    url: `${siteUrl.replace(/\/$/, '')}/${lang}${basePath === '/' ? '/' : basePath}`,
  }));
}

/**
 * Detect preferred language from Accept-Language header
 */
export function detectLanguageFromHeader(acceptLanguage: string): Lang {
  if (!acceptLanguage) return defaultLang;

  const supportedLangs = Object.keys(languages) as Lang[];

  // Parse Accept-Language header
  const langs = acceptLanguage
    .split(',')
    .map((lang) => {
      const [code, qValue] = lang.trim().split(';q=');
      return {
        code: code.split('-')[0].toLowerCase(), // Get primary language code
        q: qValue ? parseFloat(qValue) : 1,
      };
    })
    .sort((a, b) => b.q - a.q);

  // Find first supported language
  for (const { code } of langs) {
    if (supportedLangs.includes(code as Lang)) {
      return code as Lang;
    }
  }

  return defaultLang;
}

/**
 * Get the HTML lang attribute value for a language
 */
export function getHtmlLang(lang: Lang): string {
  const langMap: Record<Lang, string> = {
    zh: 'zh-CN',
    en: 'en',
    ja: 'ja',
  };
  return langMap[lang];
}

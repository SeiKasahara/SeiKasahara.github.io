// Re-export everything from utils
export {
  languages,
  defaultLang,
  translations,
  getLangFromUrl,
  getLangFromPath,
  useTranslations,
  translateTag,
  translateCategory,
  getLocalizedUrl,
  removeLanguagePrefix,
  getHreflangUrls,
  detectLanguageFromHeader,
  getHtmlLang,
} from './utils';

export type { Lang } from './utils';

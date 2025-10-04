import {
	AUTO_MODE,
	DARK_MODE,
	DEFAULT_THEME,
	LIGHT_MODE,
} from "@constants/constants.ts";
import { expressiveCodeConfig } from "@/config";
import type { LIGHT_DARK_MODE } from "@/types/config";

// 主题变化回调函数类型
type ThemeChangeCallback = (isDark: boolean) => void;

// 存储所有注册的回调函数
const themeCallbacks: ThemeChangeCallback[] = [];

// 全局唯一的观察器
let themeObserver: MutationObserver | null = null;

// 防抖定时器
let themeDebounceTimer: number | null = null;

export function getDefaultHue(): number {
	const fallback = "250";
	const configCarrier = document.getElementById("config-carrier");
	return Number.parseInt(configCarrier?.dataset.hue || fallback, 10);
}

export function getHue(): number {
	const stored = localStorage.getItem("hue");
	return stored ? Number.parseInt(stored, 10) : getDefaultHue();
}

export function setHue(hue: number): void {
	localStorage.setItem("hue", String(hue));
	const r = document.querySelector(":root") as HTMLElement;
	if (!r) {
		return;
	}
	r.style.setProperty("--hue", String(hue));
}

export function applyThemeToDocument(theme: LIGHT_DARK_MODE) {
	switch (theme) {
		case LIGHT_MODE:
			document.documentElement.classList.remove("dark");
			break;
		case DARK_MODE:
			document.documentElement.classList.add("dark");
			break;
		case AUTO_MODE:
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
			break;
	}

	// Set the theme for Expressive Code
	document.documentElement.setAttribute(
		"data-theme",
		expressiveCodeConfig.theme,
	);
}

export function setTheme(theme: LIGHT_DARK_MODE): void {
	localStorage.setItem("theme", theme);
	applyThemeToDocument(theme);
}

export function getStoredTheme(): LIGHT_DARK_MODE {
	return (localStorage.getItem("theme") as LIGHT_DARK_MODE) || DEFAULT_THEME;
}

/** 获取当前主题状态 */
export function isDarkTheme(): boolean {
  return document.documentElement.classList.contains('dark');
}

/** 初始化主题观察器 */
function initThemeObserver() {
  if (themeObserver) return;
  
  themeObserver = new MutationObserver(() => {
    // 使用防抖避免频繁触发
    if (themeDebounceTimer) {
      window.clearTimeout(themeDebounceTimer);
    }
    
    themeDebounceTimer = window.setTimeout(() => {
      const isDark = isDarkTheme();
      // 通知所有注册的回调函数
      themeCallbacks.forEach(callback => {
        try {
          callback(isDark);
        } catch (error) {
          console.warn('Error in theme change callback:', error);
        }
      });
    }, 100);
  });

  // 开始观察主题变化
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  });
}

/** 注册主题变化回调函数 */
export function onThemeChange(callback: ThemeChangeCallback): () => void {
  // 初始化观察器（如果尚未初始化）
  initThemeObserver();
  
  // 添加回调函数到列表
  themeCallbacks.push(callback);
  
  // 立即执行一次回调函数，提供当前主题状态
  try {
    callback(isDarkTheme());
  } catch (error) {
    console.warn('Error in theme change callback:', error);
  }
  
  // 返回取消注册的函数
  return () => {
    const index = themeCallbacks.indexOf(callback);
    if (index > -1) {
      themeCallbacks.splice(index, 1);
    }
  };
}

/** 销毁主题观察器 */
export function destroyThemeObserver() {
  if (themeObserver) {
    themeObserver.disconnect();
    themeObserver = null;
  }
  
  if (themeDebounceTimer) {
    window.clearTimeout(themeDebounceTimer);
    themeDebounceTimer = null;
  }
  
  // 清空回调函数列表
  themeCallbacks.length = 0;
}

// 页面卸载时自动销毁观察器
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', destroyThemeObserver);
}
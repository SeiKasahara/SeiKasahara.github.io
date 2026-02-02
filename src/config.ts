import type {
	ExpressiveCodeConfig,
	GiscusConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Calhoun's House",
	subtitle: "AI/Daily Life/Technology",
	themeColor: {
		hue: 50, // Yellow theme color (0-360: red=0, yellow=50, green=120, cyan=180, blue=240, purple=275, pink=345)
		fixed: false, // Hide the theme color picker for visitors
		forceDarkMode: false, // Force dark mode and hide the light/dark switcher
	},
	banner: {
		enable: true,
		src: "/Celestia.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "Pixiv @chokei", // Credit text to be displayed
			url: "https://www.pixiv.net/artworks/122782209", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		   {
		     src: '/favicon/icon.webp',
		//   theme: 'light',
		//   sizes: '32x32',
		   }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Friends,
		LinkPreset.Messages,
		{
			name: "GitHub",
			url: "https://github.com/seikasahara",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/avatar.webp", // 请替换为您的头像
	name: "Edward Calhoun",
	bio: "Anarchy Mom loves her children",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/seikasahara",
		},
		// 可以添加更多社交链接
		// {
		// 	name: "Twitter",
		// 	icon: "fa6-brands:twitter",
		// 	url: "https://twitter.com/yourname",
		// },
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};

export const giscusConfig: GiscusConfig = {
	enable: true,
	repo: "seikasahara/seikasahara.github.io",
	repoId: "MDEwOlJlcG9zaXRvcnkxMzkyNjAwODY=",
	category: "Announcements",
	categoryId: "DIC_kwDOCEzwts4C1yM-",
	mapping: "pathname",
	strict: false,
	reactionsEnabled: true,
	emitMetadata: false,
	inputPosition: "top",
	theme: "preferred_color_scheme",
	lang: "zh-CN",
};

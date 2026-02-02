import { LinkPreset, type NavBarLink } from "@/types/config";
import { type Lang, useTranslations } from "@/i18n";

// Static link presets for backward compatibility (Chinese)
export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
	[LinkPreset.Home]: {
		name: "主页",
		url: "/",
	},
	[LinkPreset.About]: {
		name: "关于",
		url: "/about/",
	},
	[LinkPreset.Archive]: {
		name: "时间线",
		url: "/archive/",
	},
	[LinkPreset.Series]: {
		name: "专栏",
		url: '/series/',
	},
	[LinkPreset.Friends]: {
		name: "友链",
		url: '/friends/',
	},
	[LinkPreset.Messages]: {
		name: "留言板",
		url: '/messages/',
	},
	[LinkPreset.Photos]: {
		name: "相册",
		url: '/photos/',
	},
	[LinkPreset.Shuoshuo]: {
		name: "碎碎念",
		url: '/shuoshuo/',
	},
};

// Function to get localized link presets
export function getLocalizedLinkPresets(lang: Lang): { [key in LinkPreset]: NavBarLink } {
	const t = useTranslations(lang);

	return {
		[LinkPreset.Home]: {
			name: t('nav.home'),
			url: `/${lang}/`,
		},
		[LinkPreset.About]: {
			name: t('nav.about'),
			url: `/${lang}/about/`,
		},
		[LinkPreset.Archive]: {
			name: t('nav.archive'),
			url: `/${lang}/archive/`,
		},
		[LinkPreset.Series]: {
			name: t('nav.series'),
			url: `/${lang}/series/`,
		},
		[LinkPreset.Friends]: {
			name: t('nav.friends'),
			url: `/${lang}/friends/`,
		},
		[LinkPreset.Messages]: {
			name: t('nav.messages'),
			url: `/${lang}/messages/`,
		},
		[LinkPreset.Photos]: {
			name: t('nav.photos'),
			url: `/${lang}/photos/`,
		},
		[LinkPreset.Shuoshuo]: {
			name: t('nav.shuoshuo'),
			url: `/${lang}/shuoshuo/`,
		},
	};
}

import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),

		pinned: z.boolean().optional().default(false),

		series: z.string().optional(),

		/* Encryption support */
		encrypted: z.boolean().optional().default(false),
		password: z.string().optional(), // 仅用于加密脚本，不会暴露到前端

		/* i18n support */
		lang: z.enum(["zh", "en", "ja"]).optional().default("zh"),
		originalLang: z.enum(["zh", "en", "ja"]).optional(),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});

const specCollection = defineCollection({
	schema: z.object({}),
});

export const collections = {
	posts: postsCollection,
    spec: specCollection,
};

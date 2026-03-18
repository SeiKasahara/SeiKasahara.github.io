import type { GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getCollection("posts");
	return posts.map((post) => ({
		params: { slug: post.slug },
	}));
};

export async function GET({ params }: { params: { slug: string } }) {
	const slug = params.slug;
	const redirectUrl = `/zh/posts/${slug}/`;
	const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="refresh" content="0;url=${redirectUrl}">
<link rel="canonical" href="${redirectUrl}">
<title>Redirecting...</title>
</head>
<body>
<script>window.location.replace("${redirectUrl}");</script>
</body>
</html>`;
	return new Response(html, {
		headers: { "Content-Type": "text/html" },
	});
}

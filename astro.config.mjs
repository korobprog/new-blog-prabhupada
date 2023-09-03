import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import.meta.env.BASE_URL
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://korobprog.github.io',
	integrations: [mdx(), sitemap()],
	base: '/new-blog-prabhupada',
});

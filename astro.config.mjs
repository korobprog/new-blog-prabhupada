import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import robotsTxt from "astro-robots-txt";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://new-blog-prabhupada.web.app',
	integrations: [mdx(), sitemap(),react(),
	robotsTxt(
		{
			allow: '/',
			userAgent: '*'
		}
	)
	

]
});
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
               site: "https://DodoGames7.github.io",
               base: "/astro-site",
	integrations: [
		starlight({
			title: 'dodoGames stuff',
			defaultLocale: 'root',
			locales: {
				// English docs in `src/content/docs/en/`
				root: {
					label: 'English',
					lang: 'en', // lang is required for root locales
				}
			},
			customCss: [
				// Use a custom theme
				'./src/themes/theme2.css',
			],
			lastUpdated: true,
			social: {
				github: 'https://github.com/DodoGames7/astro-site',
				discord: 'https://discord.gg/pFwKjAaZvj',
				twitter: 'https://twitter.com/dodoGames14',
				threads: 'https://www.threads.net/@dodogames14'
			},
			sidebar: [
				{
					label: "Home",
					
					items: [
						{ label: 'Introduction', link: '/home/introduction'}
					],
				},
				{
					label: 'General',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Projects', link: '/general/projects/'},
						{ label: 'Codes', link: '/general/codes/'},
						{ label: 'Other', link: '/general/other/'}
					],
					collapsed: true
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Slash commands', link: '/guides/slash-commands/'},
						{ label: 'Slash command choices', link: '/guides/slash-command-choices/'},
						{ label: 'Author interactions', link: '/guides/author-interactions/'}
					],					
					collapsed: true
				},
				{
					label: 'Development',
					autogenerate: { directory: 'development' },					
					collapsed: true
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});

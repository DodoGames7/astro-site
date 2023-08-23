import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
               site: "https://DodoGames7.github.io",
               base: "/astro-site",
	integrations: [
		starlight({
			title: 'dodoGames stuff',
			customCss: [
				// Use a custom theme
				'./src/themes/theme1.css',
			],
			social: {
				github: 'https://github.com/DodoGames7/astro-site',
				discord: 'https://discord.gg/pFwKjAaZvj',
				twitter: 'https://twitter.com/dodoGames14',
				threads: 'https://www.threads.net/@dodogames14'
			},
			sidebar: [
				{
					label: 'General',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Projects', link: '/general/projects/' },
						{ label: 'Codes', link: '/general/codes/' },
						{ label: 'Other', link: '/general/other/' }
					],
				},
				{
					label: 'Development',
					autogenerate: { directory: 'development' },
					collapsed: false
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});

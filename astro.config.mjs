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
				},
				ar: {
					label: 'العربية',
					lang: 'ar',
					dir: 'rtl'
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
					translations: { ar: 'الصفحة الرئيسية' },
					items: [
						{ label: 'Introduction', link: '/home/introduction', translations: { ar: 'مقدمة' }}
					],
				},
				{
					label: 'General',
					translations: { ar: 'عام' },
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Projects', link: '/general/projects/', translations: { ar: 'مشاريع' } },
						{ label: 'Codes', link: '/general/codes/', translations: { ar: 'الاكواد' } },
						{ label: 'Other', link: '/general/other/', translations: { ar: 'غيره' } }
					],
					collapsed: true
				},
				{
					label: 'Development',
					autogenerate: { directory: 'development' },
					translations: { ar: 'التطوير' },
					collapsed: true
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://patrickserrano.github.io',
	base: '/pyrokai',
	integrations: [
		starlight({
			title: 'Pyrokai',
			description:
				"Monokai's accent family, warm-shifted, expanded into a Flexoki-shaped tonal system.",
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/patrickserrano/pyrokai' }],
			customCss: [
				'@fontsource-variable/inter',
				'@fontsource/jetbrains-mono/400.css',
				'@fontsource/jetbrains-mono/500.css',
				'./src/styles/pyrokai.css',
			],
			sidebar: [
				{ label: 'Overview', slug: 'index' },
				{ label: 'Palette', slug: 'palette' },
				{ label: 'App themes', slug: 'app-themes' },
			],
			components: {
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
		}),
	],
});

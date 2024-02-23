// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	head: {
		title: 'Style Haven',
		link: [{ rel: 'icon', type: 'image/svg+xml', href: '/pinia.svg' }],
	},
	devtools: { enabled: true },
	css: ['/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});

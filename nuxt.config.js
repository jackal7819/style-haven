// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Style Haven',
			meta: [{ name: 'description', content: 'The store for style' }],
			link: [{ rel: 'icon', type: 'image/svg+xml', href: '/pinia.svg' }],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
					integrity:
						'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==',
					crossorigin: 'anonymous',
					referrerpolicy: 'no-referrer',
				},
			],
		},
	},
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});

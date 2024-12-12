import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],
	
	vitePlugin: {
		inspector: true,
	},
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'docs', // The directory for HTML files
			fallback: 'en.html' ,     // Optional: SPA fallback file
			precompress: false,
			strict: true,
		}),
		paths: {
			base: '/perth-soup-co', // Replace 'my-repo' with your repository name
		},
		plugins: [ 
			paraglide({ 
				locales: ['en', 'fr'],
				defaultLocale: 'en',
			})
		], 
	}
};
export default config;
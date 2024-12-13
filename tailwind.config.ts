import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'
import { perthSoupCoTheme } from './perth-soup-co-theme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			fontFamily: {
				base: 'var(--theme-font-family-base)', // Base font
				heading: 'var(--theme-font-family-heading)', // Heading font
			},
			colors: {
				ribbon: '#ffcb05',
			}
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [
					perthSoupCoTheme
				],
			},
		}),	],
} satisfies Config;

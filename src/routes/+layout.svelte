<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';

	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	// Set up floating popup positions
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Theme management store
	import { theme } from '../stores/theme';

	// Reactive block to set the theme based on store
	$: {
		if (typeof document !== 'undefined') {
			// Remove previous theme classes
			document.documentElement.classList.remove('light', 'dark');
			// Add new theme class from store value
			document.documentElement.classList.add(String($theme));
		}
	}

	// Toggle theme function
	const toggleTheme = (event: Event) => {
		const newTheme = (event.target as HTMLInputElement).checked ? 'dark' : 'light';
		theme.set(newTheme);
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', newTheme); // Save user preference to local storage
		}
	};
</script>

<!-- Paraglide Translation Setup -->
<ParaglideJS {i18n}>
	<!-- App Shell Component -->
	<AppShell>
		<svelte:fragment slot="header">
			<!-- App Bar with Theme Toggle -->
			<AppBar>
				<svelte:fragment slot="trail">
					<!-- Theme toggle switch -->
					<label class="inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							class="sr-only peer"
							on:change="{toggleTheme}"
							aria-label="Toggle theme"
						/>
						<div class="relative w-11 h-6 bg-surface-500 rounded-full peer peer-focus:ring-2 peer-focus:ring-surface-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary-500"></div>
						<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
						<a href="./fr-ca">FR</a>&nbsp;|&nbsp;<a href="./">EN</a>
					</label>
				</svelte:fragment>
			</AppBar >
		</svelte:fragment>

		<!-- Page Content (route slots) -->
		<slot />
	</AppShell>
</ParaglideJS>

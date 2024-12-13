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
		<!-- Page Content (route slots) -->
		<slot />
	</AppShell>
</ParaglideJS>

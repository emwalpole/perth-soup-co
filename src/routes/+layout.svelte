<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { theme } from '../stores/theme';
	import { language } from '../stores/lang';
	import { onMount } from 'svelte';
	import { t, locale } from 'svelte-i18n';
  	import '../i18n';

	$: {
		if (typeof document !== 'undefined') {
			document.documentElement.classList.remove('light', 'dark');
			document.documentElement.classList.add(String($theme));
			document.documentElement.lang = String($language);
		}
	}

	// Function to change language
	const changeLanguage = (newLang: string) => {
		locale.set(newLang); // Set the new language
		language.set(newLang);
		if (typeof window !== 'undefined') {
      		localStorage.setItem('lang', newLang); // Save the language choice
    	}
	}

	// Function to toggle the theme
	const toggleTheme = (event: any) => {
		let newTheme = event.target.checked ? 'dark' : 'light';
		theme.set(newTheme);
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', newTheme); // Save user preference to local storage
    	}
	};
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
			<AppBar>
				<svelte:fragment slot="trail">
						<button on:click={() => changeLanguage('en-ca')}>{$t('english_button')}</button>
						<button on:click={() => changeLanguage('fr-ca')}>{$t('french_button')}</button>
						<label class="inline-flex items-center cursor-pointer">
							<input type="checkbox" value="" class="sr-only peer" on:change="{toggleTheme}">
							<div class="relative w-11 h-6 bg-surface-500 rounded-full peer peer-focus:ring-2 peer-focus:ring-surface-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tertiary-500"></div>
							<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
						</label>
				</svelte:fragment>
			</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

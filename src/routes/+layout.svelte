<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';

	import '../app.postcss';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';

	// Set up floating popup positions
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { initializeStores, Toast } from '@skeletonlabs/skeleton';

	initializeStores();

</script>

<!-- Paraglide Translation Setup -->
<ParaglideJS {i18n}>
	<AppShell>
		<!-- Page Content (route slots) -->
		<slot />
	</AppShell>
</ParaglideJS>

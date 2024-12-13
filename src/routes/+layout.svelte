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

</script>

<!-- Paraglide Translation Setup -->
<ParaglideJS {i18n}>
	<!-- App Shell Component -->
	<AppShell>
		<!-- Page Content (route slots) -->
		<slot />
	</AppShell>
</ParaglideJS>

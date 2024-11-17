<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container w-[80%] max-w-[500px] h-full mx-auto flex justify-center items-center">
	<div class="space-y-8 text-center flex flex-col items-center">
		<section class="w-screen pt-3">
			<img src="/assets/PerthSoupBW.png" class="dark:invert dark:green pb-6 max-w-[300px] mx-auto" alt={$t("perth_soup_logo_alt")}/>
			<h1 class="visually-hidden">Perth Soup Company</h1>
			<p class="font-heading font-semibold text-[36px] pb-3">{$t("header_00")}!</p>
			<p class="font-heading text-[24px]">{$t("header_01")}</p>
			<p class="p-3 font-extrabold">{$t("header_02")}.</p>
			<p class="flex p-3 justify-center bg-surface-500 text-white dark:bg-white dark:text-black">
				<span class="max-w-[350px]"><ListRow items={ FeaturedText } /></span>
			</p>
			<p class="flex p-3 justify-center bg-tertiary-500 text-black checkered">
				<span class="max-w-[345px]"><IconRow icons={ FeaturedIcons } /></span>
			</p>
		</section>

		<section class="space-y-2 w-[80%] max-w-[650px]">
			<p class="font-extrabold text-lg">{$t("location")}</p>
			<h2 class="font-extrabold">{$t("location_header")}:</h2>
			<span>{$t("hours_00")}<br/>
				{$t("hours_01")}<br/>
				{$t("hours_02")}<br/></span>
			<p class="font-heading font-extrabold text-[24px]">{$t("contact_info")}</p>
		</section>

		<section class="flex w-screen p-6 justify-center bg-success-500 text-white">
			<Callout>
				<img slot="image" src="/assets/mavericks-logo.png" width="100%" alt="{$t("mavericks_logo_alt")}" />
				<p class="w-full font-extrabold text-xl" slot="title">{$t("mavericks_title")}!</p>
				<p class="w-full" slot="description">{$t("mavericks_description")}</p>
				<p class="w-full font-bold" slot="note">{$t("mavericks_note")}</p>
			</Callout>
		</section>

		<section class="w-[80%] max-w-[500px]">
			<h2 class="pb-6 font-extrabold">{$t("shopping_header")}:</h2>
			<div class="flex p-6 rounded-lg justify-center bg-surface-500 text-white dark:bg-white dark:text-black">
				<ListBlock items={ Locations } type={ 'Locations' } />
			</div>
		</section>

		<section class="w-[80%] max-w-[500px]">
			<h2 class="pb-6 font-extrabold">{$t("soups_header")}:</h2>
			<div class="flex p-6 rounded-lg justify-center bg-surface-500 text-white dark:bg-white dark:text-black">
				<ListBlock items={ Soups } type={ 'Soups' } />
			</div>
		</section>

		<section class="w-[80%] max-w-[500px]">
			<h2 class="pb-6 font-extrabold">{$t("ingredients_header")}:</h2>
			<div class="flex p-6 rounded-lg justify-center bg-primary-500 text-white">
				<ListBlock items={ Ingredients } type={ 'Ingredients' } />
			</div>
		</section>

		<section class="w-[80%] max-w-[500px]">
			<h2 class="pb-3 font-extrabold">{$t("wholesale_header")}</h2>
			<p>{$t("wholesale_info")}:</p>
			<p class="font-heading pt-4 pb-2 font-extrabold text-[24px]">{$t("wholesale_enquiries")}:</p>
			<p class="font-extrabold">wholesale@perthsoup.ca</p>
		</section>

		{#each About as section, index }
			<div class="w-[80%] max-w-[500px]">
				<Accordion title={$t(section.title)} paragraphs={section.text} />
			</div>

		{/each}

		<section>
			<p class="font-heading font-semibold text-xl">"{$t("closing_00")}"</p>
			<p>{$t("closing_01")}</p>
			<p>- Kim -</p>
		</section>
 
		<footer class="pb-6">&copy; {$t("copyright").replace("{currentYear}", currentYear)}</footer>
	</div>
</div>

<script lang="ts">
	import ListBlock from "../components/ListBlock.svelte";
	import ListRow from "../components/ListRow.svelte";
	import IconRow from "../components/IconRow.svelte";
	import Accordion from "../components/Accordion.svelte";
	import Callout from "../components/Callout.svelte";
	import { Locations } from "../content/Locations";
	import { FeaturedText, FeaturedIcons } from "../content/Features";
	import { Soups } from "../content/Soups";
	import { Ingredients } from "../content/Ingredients";
	import { About } from "../content/About";
    import { t } from 'svelte-i18n';


	const currentYear = String(new Date().getFullYear());

</script>

<style lang="postcss">
	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
	.checkered {
		background-image: url('/assets/check.png');
		background-repeat: repeat;
		background-size: 350px 350px;
	}
</style>

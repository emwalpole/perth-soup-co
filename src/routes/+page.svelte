<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container w-[80%] max-w-[500px] h-full mx-auto flex justify-center items-center">
	<div class="space-y-8 text-center flex flex-col items-center">
		<section class="w-screen pt-3">
			<img src="assets/PerthSoupCMYK.png" class="dark:hidden pb-6 max-w-[300px] mx-auto" alt={m.perth_soup_logo_alt()}/>
			<img src="assets/PerthSoupBW.png" class="hidden dark:block dark:invert pb-6 max-w-[300px] mx-auto" alt={m.perth_soup_logo_alt()}/>
			<h1 class="visually-hidden">Perth Soup Company</h1>
			<p class="font-heading font-semibold text-[36px] pb-3">{m.header_00()}!</p>
			<p class="font-heading text-[24px]">{m.header_01()}</p>
			<p class="p-3 font-extrabold">{m.header_02()}.</p>
			<p class="flex p-3 justify-center bg-surface-500 text-white dark:bg-white dark:text-black">
				<span class="max-w-[350px]"><ListRow items={ FeaturedText } /></span>
			</p>
			<p class="flex p-3 justify-center bg-tertiary-500 text-black checkered">
				<span class="max-w-[345px]"><IconRow icons={ FeaturedIcons } /></span>
			</p>
		</section>

		<section class="space-y-2 w-[80%] max-w-[650px]">
			<p class="font-extrabold text-lg">{m.location()}</p>
			<h2 class="font-extrabold">{m.location_header()}:</h2>
			<span>{m.hours_00()}<br/>
				{m.hours_01()}<br/>
				{m.hours_02()}<br/></span>
			<p class="font-heading font-extrabold text-[24px]">{m.contact_info()}</p>
		</section>

		<section class="flex w-screen p-6 justify-center bg-success-500 text-white">
			<Callout>
				<img slot="image" src="assets/mavericks-logo.png" width="100%" alt="{m.mavericks_logo_alt()}" />
				<p class="w-full font-extrabold text-xl" slot="title">{m.mavericks_title()}!</p>
				<p class="w-full" slot="description">{m.mavericks_description()}</p>
				<p class="w-full font-bold" slot="note">{m.mavericks_note()}</p>
			</Callout>
		</section>

		<section class="w-[80%] max-w-[500px]">
			<h2 class="pb-6 font-extrabold">{m.shopping_header()}:</h2>
			<div class="flex p-6 rounded-lg justify-center bg-surface-500 text-white dark:bg-white dark:text-black">
				<ListBlock items={ Locations } type={ 'Locations' } />
			</div>
		</section>

		<section class="w-[80%] max-w-[500px]">
			<h2 class="pb-6 font-extrabold">{m.soups_header()}:</h2>
			<div class="flex p-6 rounded-lg justify-center bg-surface-500 text-white dark:bg-white dark:text-black">
				<ListBlock items={ Soups } type={ 'Soups' } />
			</div>
		</section>

		<section class="w-[80%] max-w-[500px]">
			<h2 class="pb-6 font-extrabold">{m.ingredients_header()}:</h2>
			<div class="flex p-6 rounded-lg justify-center bg-primary-500 text-white">
				<ListBlock items={ Ingredients } type={ 'Ingredients' } />
			</div>
		</section>

		<section class="w-[80%] max-w-[500px]">
			<h2 class="pb-3 font-extrabold">{m.wholesale_header()}</h2>
			<p>{m.wholesale_info()}</p>
			<p class="font-heading pt-4 pb-2 font-extrabold text-[24px]">{m.wholesale_enquiries()}:</p>
			<p class="font-extrabold">info@perthsoup.ca</p>
		</section>

		{#each About as section, index }
			<div class="w-[80%] max-w-[500px]">
				<Accordion title={ section.title } paragraphs={section.text} />
			</div>

		{/each}

		<section>
			<p class="font-heading font-semibold text-xl">"{m.closing_00()}"</p>
			<p>{m.closing_01()}</p>
			<p>- Kim -</p>
		</section>
 
		<footer class="pb-6">&copy; {m.copyright( { currentYear: year } )}</footer>
	</div>
</div>

<script lang="ts">
	import ListBlock from "$lib/components/ListBlock.svelte";
	import ListRow from "$lib/components/ListRow.svelte";
	import IconRow from "$lib/components/IconRow.svelte";
	import Accordion from "$lib/components/Accordion.svelte";
	import Callout from "$lib/components/Callout.svelte";

	import * as m from '$lib/paraglide/messages.js'

	const year = String(new Date().getFullYear());

	const Soups = [
		{ name:m.soups_00()},
		{ name:m.soups_01()},
		{ name:m.soups_02()},
		{ name:m.soups_03()},
		{ name:m.soups_04()},
		{ name:m.soups_05()},
		{ name:m.soups_06()},
		{ name:m.soups_07()},
		{ name:m.soups_08()},
		{ name:m.soups_09()},
	]
	const Locations = [
    {  name: "Metro", city: "Perth" },
    {  name: "Glenburnies", city: "Kingston" },
    {  name: "Kudrinko's", city: "Westport" },
    {  name: "B & H Community Grocer", city: "Kemptville" },
    {  name: "Valley Custom Cutting", city: "Smiths Falls" },
    {  name: "Rideau Ferry Store", city: "Rideau Ferry" },
	]
	const Ingredients = [
		{ name: m.ingredients_00(), icon:"assets/ingredients/Ingredients_AllNatural.svg" },
		{ name: m.ingredients_01(), icon:"assets/ingredients/Ingredients_NoGluten.svg" },
		{ name: m.ingredients_02(), icon:"assets/ingredients/Ingredients_NoMSG.png" },
		{ name: m.ingredients_03(), icon:"assets/ingredients/Ingredients_NoGMO.svg" },
		{ name: m.ingredients_04(), icon:"assets/ingredients/Ingredients_Vegan.svg" },
		{ name: m.ingredients_05(), icon:"assets/ingredients/Ingredients_NoSoy.svg" },
		{ name: m.ingredients_06(), icon:"assets/ingredients/Ingredients_NoNuts.svg" },
	]
	const FeaturedText = [
		{ name:m.features_00()},
		{ name: m.features_01()},
		{ name: m.features_02()},
		{ name: m.features_03()},
		{ name: m.features_04()},
	]
	const FeaturedIcons = [
		{ src:"assets/ontariomade.png", alt: m.features_04()},
		{ src:"assets/ingredients/Ingredients_NoNuts.svg", alt: m.ingredients_06()},
		{ src:"assets/ingredients/Ingredients_NoMSG.svg", alt: m.ingredients_02()},
		{ src:"assets/ingredients/Ingredients_AllNatural.svg", alt: m.ingredients_00()}
	]
	const About = [
    { 
        title: m.about_section_00_title(),
        text: [ 
            m.about_section_00_p_01(),
            m.about_section_00_p_02(),
            m.about_section_00_p_03(),
        ]
    },
    { 
        title: m.about_section_01_title(),
        text: [ 
           m.about_section_01_p_01(),
           m.about_section_01_p_02(),
           m.about_section_01_p_03(),
           m.about_section_01_p_04(),
           m.about_section_01_p_05(),
        ]
    }
		// { 
		//     title: "about_section_02_title",
		//     image: "",
		//     text: [ 
		//         "about_section_02_p_01",
		//         "about_section_02_p_02",
		//         "about_section_02_p_03",
		//         "about_section_02_p_04",
		//     ]
		// },
		// { 
		//     title: "about_section_03_title",
		//     text: [ 
		//         "about_section_03_p_01",
		//         "about_section_03_p_02",
		//         "about_section_03_p_03",
		//         "about_section_03_p_04",
		//     ]
		// },

	]
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

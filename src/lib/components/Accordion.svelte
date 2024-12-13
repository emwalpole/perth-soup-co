<!-- src/lib/components/Accordion.svelte -->
<script lang="ts">
    export let title: string;
    export let paragraphs: Array<String> = [];
    import { getContext } from 'svelte';
    const i18n = getContext('i18n');
</script>
  
<!-- HTML structure -->
<details class="p-2 rounded-lg bg-surface-500 text-white">
  <summary>{ title }</summary>
  {#each paragraphs as paragraph}
      <p class="p-3 px-8 text-left">{ paragraph }</p>
  {/each}
</details>
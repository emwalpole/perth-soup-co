<!-- src/components/Accordion.svelte -->
<script lang="ts">
    export let title: string;
    export let paragraphs: Array<String> = [];
    import { t } from 'svelte-i18n';
</script>
  
<!-- HTML structure -->
<details class="p-2 rounded-lg bg-surface-500 text-white dark:bg-white dark:text-black">
  <summary>{ title }</summary>
  {#each paragraphs as paragraph, index}
      <p class="p-3 px-8 text-left">{ $t(paragraph) }</p>
  {/each}
</details>
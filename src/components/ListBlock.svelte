<!-- src/components/ListBlock.svelte -->
<script lang="ts">
  export let items: Array<Object> | Array<String> = [];
  export let type: string;
  import { t } from 'svelte-i18n';

</script>

<!-- HTML structure -->
<ul>
  <!-- Iterate over the items array and render each item in a <li> -->
  {#each items as item}
    <li>
      {#if type=='Locations'}
        <strong>{$t(item.name)}</strong>, {item.city}
        {:else if type=='Ingredients'}
        <span class="flex flex-nowrap items-center mb-4"><img src={ item.icon } alt="" width="40"/><strong class="pl-5">{$t(item.name)}</strong></span>
        {:else}
        <strong>{$t(item.name)}</strong>
      {/if}
    </li>
  {/each}
</ul>
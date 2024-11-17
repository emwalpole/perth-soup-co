<!-- src/components/ListRow.svelte -->
<script lang="ts">
    // Declare any props that the component might accept
    export let items: Array<Object> | Array<String> = [];
    import { t } from 'svelte-i18n';

</script>
  
<!-- HTML structure -->
<!-- Iterate over the items array and render each item -->
<span>
    {#each items as item, index}
        {#if index!=0}&nbsp;&#8226; {/if}{$t(item.name)}
    {/each}
</span>

<!-- src/lib/components/IconRow.svelte -->
<script lang="ts">
    // Declare any props that the component might accept
    export let icons: Array<Object> = [];
</script>
  
<!-- HTML structure -->
<!-- Iterate over the items array and render each item -->
<span class="flex flex-nowrap">
    {#each icons as icon}
        <span class="first:ml-0 ml-2"><img src="{icon.src}" alt="{icon.alt}" width="65px"/></span>
    {/each}
</span>
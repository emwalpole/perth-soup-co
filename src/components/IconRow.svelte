<!-- src/components/IconRow.svelte -->
<script lang="ts">
    // Declare any props that the component might accept
    export let icons: Array<Object> = [];
</script>
  
<!-- HTML structure -->
<!-- Iterate over the items array and render each item -->
<span class="flex flex-nowrap">
    {#each icons as icon}
        <img class="first:ml-0 ml-4" src="{icon.src}" alt="{icon.alt}" width="65px"/>
    {/each}
</span>

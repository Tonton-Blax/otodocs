<script>
    export let href = '';
    export let alt = '';
    export let title = '';
</script>

{#if href.includes('.svg')}
<img class="inline inline-bloc w-4 h-4" src={href} {alt} {title} />
{:else}
<img class="h-auto max-w-full" src={href} {alt} {title} />
{/if}
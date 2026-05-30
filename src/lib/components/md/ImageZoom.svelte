<script>
    import { onMount } from "svelte";
    import ImageZoom from "js-image-zoom";

    let { url, options = {} } = $props();

    let container;

    const defaultOptions = {
        width: 960,
        zoomWidth: 500,
        offset: { vertical: 0, horizontal: 10 },
        zoomPosition: "original",
    };

    onMount(() => {
        const mergedOptions = { ...defaultOptions, ...options, img: url };
        new ImageZoom(container, mergedOptions);
    });
</script>

<div class="imageContainer" bind:this={container}></div>

<style>
    .imageContainer :global(img) {
        height: auto !important;
        border-radius: 1rem;
    }
</style>

<script>
    import { onMount } from "svelte";
    import ImageZoom from "js-image-zoom";

    export let url;
    export let options = {
        width: 960,
        height: 440,
        zoomWidth: 500,
        img: "1.jpg",
        offset: { vertical: 0, horizontal: 10 },
        zoomPosition: "original",
    };
    let container;

    onMount(() => {
        options.img = url;
        new ImageZoom(container, options);
    });
</script>

<div class="imageContainer" bind:this={container}></div>

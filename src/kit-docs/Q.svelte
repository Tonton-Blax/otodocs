<script>
    export let text = 'word';
    export let meta = undefined;
    export let type = 'actionMarker';
</script>

<q data-mark-type={type} data-contenu={meta || text}>
    &nbsp;{text}&nbsp;
</q>
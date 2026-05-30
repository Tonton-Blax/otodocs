<script>
  let { text = 'word', meta = undefined, type = 'actionMarker' } = $props();
</script>

<q data-mark-type={type} data-contenu={meta || text}>
    &nbsp;{text}&nbsp;
</q>

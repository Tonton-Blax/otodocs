<script>
  import { serializeSchema } from '$lib/utils/json-ld';
  
  let { schema } = $props();
</script>

<svelte:head>
  {@html serializeSchema(schema)}
</svelte:head>

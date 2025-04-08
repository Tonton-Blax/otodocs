<script>
  import { serializeSchema } from '$lib/utils/json-ld';
  
  export let schema;
</script>

<svelte:head>
  {@html serializeSchema(schema)}
</svelte:head> 
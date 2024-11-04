<script>
  import Schema2PC from "$img/2pc.svg?raw";
  import SchemasScreens from "$img/2screens.svg?raw";
  import SchemaActionMarkers from "$img/3actionMarkers.svg?raw";

  /** @type {keyof typeof schemas} */
  export let schema = "actionMarkers";

  const schemas = {
    pcs: Schema2PC,
    screens: SchemasScreens,
    actionMarkers: SchemaActionMarkers,
  };
</script>

{@html schemas[schema]}

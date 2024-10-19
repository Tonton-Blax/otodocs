<script>
  export let isGray = false;
  export let isBlue = false;
  export let isGreen = false;
</script>

<span class="oto-round" class:isGray class:isBlue class:isGreen> </span>

<style>
  span {
    display: inline-block;
    border-radius: 100%;
    background-color: #ef4444;
    vertical-align: baseline;
    padding: 0.8ch;
    margin: auto 0.25ch;
  }
  span.isGray {
    background-color: #eee;
  }
  span.isBlue {
    background-color: #3f83f8;
  }
  span.isGreen {
    background-color: #0e9f6e;
  }
</style>

<script>
  import { tooltip } from "$lib/tooltip";

  const sizeDic = {
    "1b": [10, 10],
  };
  export let n = "1";
  $: sizes = n in sizeDic ? sizeDic[n] : [185, 215];
  //let tt = [2,3,4,5].includes(parseInt(n)) ? tooltip : {}

  $: isWhite = n.length > 1;
</script>

<span use:tooltip={{ src: `/numbers/${n}.jpg`, sizes, n }} class:isWhite>
  {n}
</span>

<style>
  span {
    aspect-ratio: 1 / 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    border-color: #ffffff;
    width: 1.375rem;
    font-size: 1rem;
    line-height: 0.74rem;
    color: white;
    background-color: #ef4444;
    border: 1px white solid;
    vertical-align: 0.125em;
    cursor: zoom-in;
  }

  span.isWhite {
    color: #ef4444;
    font-size: 0.8rem;
    background-color: #ffffff;
    border: 1px solid #ef4444;
  }

  :global(.dark) span.isWhite {
    border: none;
  }
</style>

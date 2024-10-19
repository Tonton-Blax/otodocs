<script>
  import { browser } from "$app/environment";
  export let text = "word";
  export let icon = undefined;
  export let fill = "none";
  export let stroke = "currentColor";

  const icons = {
    sync: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
    jump: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
    add: "M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z",
    trash:
      "M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z",
    openLock: `M7 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C14.7405 2 17.1131 3.5748 18.2624 5.86882L16.4731 6.76344C15.6522 5.12486 13.9575 4 12 4C9.23858 4 7 6.23858 7 9V10ZM5 12V20H19V12H5ZM10 15H14V17H10V15Z`,
    closedLock: `M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z`,
    qrCode: `M16 17V16H13V13H16V15H18V17H17V19H15V21H13V18H15V17H16ZM21 21H17V19H19V17H21V21ZM3 3H11V11H3V3ZM5 5V9H9V5H5ZM13 3H21V11H13V3ZM15 5V9H19V5H15ZM3 13H11V21H3V13ZM5 15V19H9V15H5ZM18 13H21V15H18V13ZM6 6H8V8H6V6ZM6 16H8V18H6V16ZM16 6H18V8H16V6Z`,
  };

  export let bgColor = "unset";
  export let color = "F3F4F6";

  $: d = icon ? icons[icon] : undefined;

  let isDark;

  if (browser)
    import("./isDark.js").then((module) => {
      isDark = module.isDark;
    });

  $: finalColor = !$isDark && color === "white" ? "black" : color;
</script>

<span
  style="--ti-bgcolor:{bgColor};--ti-fgcolor:{finalColor};"
  tabindex="-1"
  data-position="bottom"
  data-tooltip="Sync preview"
>
  {#if icon}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {fill}
      {stroke}
      viewBox="0 0 24 24"
      stroke-width="1.5"
    >
      <path stroke-linecap="round" stroke-linejoin="round" {d}> </path>
    </svg>
  {/if}
  {text}
</span>

<style lang="postcss">
  span {
    display: inline-flex;
    background: var(--ti-bgcolor);
    color: var(--ti-fgcolor);
    padding: 0 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    border-width: 1px;
    border-color: #e5e7eb;
    height: 2.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    width: fit-content;
    max-height: 3.5ch;
  }

  svg {
    margin-right: 0.5rem;
    width: 0.875rem;
  }
</style>

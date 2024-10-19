<script>
  import clsx from "clsx";
  import { tick } from "svelte";
  import { getStepsContext } from "./Steps.svelte";

  const { steps, register } = getStepsContext();

  /** @type {HTMLLIElement | undefined} */
  let li;
  let index = register();

  /** @type {string | null} */
  export let title = null;
  /** @type {string | null} */
  export let description = null;
  /** @type {'horizontal' | 'vertical'} */
  export let orientation = "horizontal";

  $: if ($steps > 0 && li) {
    tick().then(() => {
      if (li?.parentElement)
        index = Array.from(li.parentElement.children).indexOf(li) + 1;
    });
  }
</script>

<li
  class={clsx(
    "step relative pl-10 grid before:content-[counter(step)] before:absolute",
    "before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)]",
    "before:h-[calc(1.375rem+1px)] before:text-[0.7rem] before:font-bold before:text-white",
    "before:shadow-md",
    index !== $steps &&
      "pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-border",
    orientation === "horizontal" ? "grid-cols-5 gap-10" : "grid-cols-4 gap-4"
  )}
  style="counter-increment: step;"
  bind:this={li}
>
  <div
    class={clsx(
      "mb-6 1200:mb-2",
      orientation === "horizontal" ? "col-span-2" : "col-span-4"
    )}
  >
    <span class="not-prose mb-4 text-base font-semibold leading-7 text-inverse">
      {#if $$slots.title}
        <slot name="title" />
      {:else if title}
        <h3>{title}</h3>
      {/if}
    </span>

    <div class="description text-sm">
      {#if $$slots.description}
        <slot name="description" />
      {:else if description}
        <p>{description}</p>
      {/if}
    </div>
  </div>

  <div class={clsx(orientation === "horizontal" ? "col-span-3" : "col-span-4")}>
    <slot />
  </div>
</li>

<style lang="postcss">
  li:before {
    background: rgb(var(--kd-color-brand));
    border-radius: 100%;
  }
</style>

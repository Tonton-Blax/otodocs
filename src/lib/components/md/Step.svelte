<script>
  import { tick } from "svelte";
  import { getStepsContext } from "./Steps.svelte";

  const { steps, register } = getStepsContext();

  let { title = null, description = null, orientation = "horizontal", children } = $props();

  let li;
  let index = $state(register());

  $effect(() => {
    if ($steps > 0 && li) {
      tick().then(() => {
        if (li?.parentElement)
          index = Array.from(li.parentElement.children).indexOf(li) + 1;
      });
    }
  });
</script>

<li
  class="step relative pl-10"
  class:grid-cols-5={orientation === "horizontal"}
  class:grid-cols-4={orientation !== "horizontal"}
  class:gap-10={orientation === "horizontal"}
  class:gap-4={orientation !== "horizontal"}
  class:pb-8={index !== $steps}
  style="counter-increment: step; display: grid;"
  bind:this={li}
>
  <div
    class:col-span-2={orientation === "horizontal"}
    class:col-span-4={orientation !== "horizontal"}
    class="mb-6 1200:mb-2"
  >
    <span class="not-prose mb-4 text-base font-semibold leading-7 text-inverse">
      {#if title}
        <h3>{title}</h3>
      {/if}
    </span>

    <div class="description text-sm">
      {#if description}
        <p>{description}</p>
      {/if}
    </div>
  </div>

  <div
    class:col-span-3={orientation === "horizontal"}
    class:col-span-4={orientation !== "horizontal"}
  >
    {@render children()}
  </div>
</li>

<style lang="postcss">
  li {
    counter-increment: step;
  }
  li:before {
    content: counter(step);
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(1.375rem + 1px);
    height: calc(1.375rem + 1px);
    font-size: 0.7rem;
    font-weight: bold;
    color: white;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    background: rgb(var(--svp-primary, 234 88 12));
    border-radius: 100%;
  }
  li:not(:last-child):after {
    content: '';
    position: absolute;
    top: calc(1.875rem + 1px);
    bottom: 0;
    left: 0.6875rem;
    width: 1px;
    background: var(--svp-c-border, #e5e7eb);
  }
</style>

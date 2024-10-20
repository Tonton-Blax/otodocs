<script>
  import "@svelteness/kit-docs/client/polyfills/index.js";
  import "@svelteness/kit-docs/client/styles/normalize.css";
  import "@svelteness/kit-docs/client/styles/fonts.css";
  import "@svelteness/kit-docs/client/styles/theme.css";
  import "@svelteness/kit-docs/client/styles/vars.css";
  import "$lib/app.css";

  import { page } from "$app/stores";

  import SvelteLogo from "$img/logo-horiz-2.svg?raw";

  import {
    Button,
    KitDocs,
    KitDocsLayout,
    createSidebarContext,
  } from "@svelteness/kit-docs";

  import { onMount } from "svelte";
  import { createPostsIndex, searchPostsIndex } from "$lib/search";
  import { slide } from "svelte/transition";
  import { clickoutside } from "@svelte-put/clickoutside";

  /** @type {import('./$types').LayoutData} */
  export let data;

  let resultsY = 0;
  let resultsX = 0;
  /** @type {HTMLInputElement | undefined} */
  let inputSearch;

  $: ({ meta, sidebar } = data);
  $: category = $activeCategory ? `${$activeCategory}: ` : "";
  $: title = meta ? `${category}${meta.title} | KitDocs` : null;
  $: description = meta?.description;

  /** @type {import('@svelteness/kit-docs').NavbarConfig} */
  const navbar = {
    links: [{ title: "Documentation", slug: "/docs", match: /\/docs/ }],
  };

  const { activeCategory } = createSidebarContext(sidebar);

  let search = "loading";
  let searchTerm = "";
  /** @type {{ slug?: string | undefined; title: string; content: string[]; }[]} */
  let results = [];

  onMount(async () => {
    const posts = await fetch("/search.json").then((res) => res.json());
    createPostsIndex(posts);
    search = "ready";
    if (inputSearch)
      ({ left: resultsX, top: resultsY } = inputSearch.getBoundingClientRect());
  });

  let onResize = () => {
    if (inputSearch)
      ({ left: resultsX, top: resultsY } = inputSearch.getBoundingClientRect());
  };

  $: if (search === "ready") {
    // runs each time `searchTerm` updates
    results = searchPostsIndex(searchTerm);
  }
</script>

<svelte:window on:resize={onResize} />

<svelte:head>
  {#key $page.url.pathname}
    {#if title}
      <title>{title}</title>
    {/if}
    {#if description}
      <meta name="description" content={description} />
    {/if}
  {/key}
</svelte:head>

<KitDocs {meta}>
  <KitDocsLayout {navbar} {sidebar} search>
    <!-- <input type="text" placeholder="Search documentation" slot="search" /> -->

    <div class="search" slot="search">
      <input
        bind:this={inputSearch}
        bind:value={searchTerm}
        placeholder="Search"
        autocomplete="off"
        spellcheck="false"
        type="search"
      />
    </div>

    {#if search === "ready" && results.length > 0}
      <div
        class="results"
        use:clickoutside
        on:clickoutside={() => (results = [])}
        transition:slide
        style="--results-x: {resultsX - 5}px; --results-y: {resultsY + 60}px"
      >
        {#if results}
          <ul>
            {#each results as result}
              <li>
                <a href="/{result.slug}">
                  {@html result.title}
                </a>
                <p>{@html result.content}</p>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    {/if}

    <div class="logo" slot="navbar-left">
      <Button href="/">
        {@html SvelteLogo}
      </Button>
    </div>

    <slot />
  </KitDocsLayout>
</KitDocs>

<style>
  :global(:root) {
    --kd-color-brand-rgb: 233, 127, 6;
  }

  :global(:root.dark) {
    --kd-color-brand-rgb: 213, 149, 76;
  }

  .logo :global(a) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo :global(svg) {
    height: 36px;
    overflow: hidden;
  }

  .search {
    /* width: 90vw; */
    max-width: 600px;
    width: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
    border: 1px solid rgb(var(--kd-color-soft));

    & input {
      width: 100%;
      padding: 1ch 1.5rem;
      color: rgb(var(--kd-color-soft) / var(--tw-text-opacity));
      font: inherit;
      outline: none;
    }
  }

  .results {
    position: fixed;
    max-height: max(300px, 60vh);
    max-width: 40vw;
    padding: 1.5rem;
    backdrop-filter: blur(5px);
    background-color: rgb(var(--kd-color-body) / 0.85);
    color: rgb(var(--kd-color-inverse));
    overflow-y: auto;
    scrollbar-width: thin;
    border-radius: 1.25rem;
    border: rgb(var(--kd-color-inverse) / 0.5) solid 2px;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);
    left: var(--results-x);
    top: var(--results-y);
    z-index: 30;
    @media (width < 992px) {
      max-width: 95vw;
      max-height: 75vh;
      left: 2.5vw;
    }

    & ul {
      display: grid;
      gap: 1rem;
      padding: 0px;
      margin: 0px;
      list-style: none;

      & a {
        color: rgb(var(--kd-color-inverse));
        border-bottom: none;
        font-weight: bold;
      }

      & a:hover {
        border-bottom: 1px solid rgb(var(--kd-color-brand));
      }

      & li:not(:last-child) {
        padding-block: 0rem 0.5rem;
        border-bottom: 1px solid rgb(var(--kd-color-brand));
      }
    }
  }
</style>

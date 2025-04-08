<script>
  import "@svelteness/kit-docs/client/polyfills/index.js";
  import "@svelteness/kit-docs/client/styles/normalize.css";
  import "@svelteness/kit-docs/client/styles/fonts.css";
  import "@svelteness/kit-docs/client/styles/theme.css";
  import "@svelteness/kit-docs/client/styles/vars.css";
  import "$lib/app.css";

  import { page } from "$app/stores";

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
  import LDTag from "$lib/components/LDTag.svelte";
  import { 
    createArticleSchema, 
    createBreadcrumbSchema, 
    createHowToSchema, 
    createFAQSchema 
  } from "$lib/utils/json-ld.js";

  /** @type {import('./$types').LayoutData} */
  export let data;

  let resultsY = 0;
  let resultsX = 0;
  /** @type {HTMLInputElement | undefined} */
  let inputSearch;

  $: ({ meta, sidebar } = data);
  $: category = $activeCategory ? `${$activeCategory}: ` : "";
  $: title = meta ? `${category}${meta.title} | Oto Documentation` : null;
  $: description = meta?.description;

  /** Extract page category and subcategory from URL path */
  function extractPathInfo(path) {
    const parts = path.split('/').filter(Boolean);
    let category = '';
    let subcategory = '';
    
    if (parts.length > 1 && parts[0] === 'docs') {
      // Handle the [...n] pattern in folder names
      const categoryMatch = parts[1].match(/\[\.\.\.(\d+)\](.+)/);
      if (categoryMatch) {
        category = categoryMatch[2];
      } else {
        category = parts[1];
      }
      
      if (parts.length > 2) {
        const subcategoryMatch = parts[2].match(/\[\.\.\.(\d+)\](.+)/);
        if (subcategoryMatch) {
          subcategory = subcategoryMatch[2];
        } else {
          subcategory = parts[2];
        }
      }
    }
    
    return {
      category: formatPathSegment(category),
      subcategory: formatPathSegment(subcategory)
    };
  }
  
  /** Format path segment for display (convert kebab-case to Title Case) */
  function formatPathSegment(segment) {
    if (!segment) return '';
    return segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }
  
  $: pathInfo = extractPathInfo($page.url.pathname);
  $: isDocsPage = $page.url.pathname.includes('/docs/');
  $: isGettingStartedPage = pathInfo.subcategory === 'Get Started' || 
                            $page.url.pathname.includes('get-started') || 
                            $page.url.pathname.includes('system-requirements') || 
                            $page.url.pathname.includes('install');
  $: isHowToPage = isGettingStartedPage || 
                   $page.url.pathname.includes('guide') || 
                   $page.url.pathname.includes('tutorial');

  $: articleSchema = isDocsPage ? 
    createArticleSchema({
      title: title || 'OtO Documentation',
      description: description || '',
      url: `https://www.oto.software${$page.url.pathname}`,
      category: pathInfo.category
    }) : null;

  $: breadcrumbSchema = isDocsPage ?
    createBreadcrumbSchema({
      items: [
        {
          name: "OtO Documentation",
          url: "https://www.oto.software/docs/",
          position: 1
        },
        {
          name: pathInfo.category || "Documentation",
          url: `https://www.oto.software/docs/${$page.url.pathname.split('/')[2] || ""}`,
          position: 2
        },
        {
          name: pathInfo.subcategory || title || "",
          url: `https://www.oto.software${$page.url.pathname}`,
          position: 3
        }
      ]
    }) : null;

  $: howToSchema = isHowToPage ?
    createHowToSchema({
      title: title || 'OtO Documentation',
      description: description || ''
    }) : null;

  $: faqSchema = isGettingStartedPage ?
    createFAQSchema({
      questions: [
        {
          question: "What are the recommended PC specifications for OtO software?",
          answer: "For PC, the recommended specifications are: Windows 10 (version 1607), recent x86-64 processor (Intel/AMD), 8+GB RAM (16GB recommended), NVIDIA GPU with CUDA support (e.g., GTX 1050 or better) for faster performance, and SSD storage for faster model loading."
        },
        {
          question: "What are the recommended Mac specifications for OtO software?",
          answer: "For Mac, the recommended specifications are: macOS 10.15 (Catalina), Apple Silicon (M1/M2) or Intel Mac processor, and 8GB RAM."
        },
        {
          question: "How do I get started with OtO software?",
          answer: "To get started with OtO software, download the application from the official website, install it following the instructions, and launch the application. The interface includes a toolbar for prompting/editing mode, editing window, rundown management, mini editor, markers module, search module, and settings panel."
        }
      ]
    }) : null;

  /** @type {import('@svelteness/kit-docs').NavbarConfig} */
  const navbar = {
    links: [
      { title: "Oto Website", slug: "https://oto.software", match: /\/docs/ },
      { title: "Documentation", slug: "/docs", match: /\/docs/ },
    ],
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
      <link
        rel="canonical"
        href="https://www.oto.software{$page.url.pathname}"
      />
      <title>{title}</title>
    {/if}
    {#if description}
      <meta name="description" content={description} />
    {/if}
    
    <!-- Open Graph / Social Media Meta Tags -->
    {#if title}
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
    {/if}
    {#if description}
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
    {/if}
    <meta property="og:type" content="article" />
    <meta property="og:url" content={"https://www.oto.software" + $page.url.pathname} />
    <meta name="twitter:card" content="summary_large_image" />
  {/key}
</svelte:head>

{#if articleSchema}
  <LDTag schema={articleSchema} />
{/if}

{#if breadcrumbSchema}
  <LDTag schema={breadcrumbSchema} />
{/if}

{#if howToSchema}
  <LDTag schema={howToSchema} />
{/if}

{#if faqSchema}
  <LDTag schema={faqSchema} />
{/if}

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
      <Button
        href={$page.url.hostname.includes("documentation.oto")
          ? "https://oto.software"
          : "/"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xml:space="preserve"
          id="Calque_1"
          x="0"
          y="0"
          style="enable-background:new 0 0 650 139"
          version="1.1"
          viewBox="0 0 650 139"
        >
          <style>
            .st0 {
              fill: #ef4444;
            }
          </style>
          <path
            d="M37.9 41.1c3.1 0 5.8.7 8.3 2.1 2.5 1.4 4.3 3.2 5.7 5.6 1.4 2.4 2.1 5.1 2.1 8.1s-.6 5.7-2 8.1c-1.4 2.4-3.3 4.3-5.8 5.6-2.5 1.4-5.2 2.1-8.3 2.1s-5.8-.7-8.3-2.1-4.3-3.2-5.7-5.6c-1.4-2.4-2.1-5.1-2.1-8.1s.7-5.7 2.1-8.1c1.4-2.4 3.3-4.3 5.8-5.6 2.4-1.4 5.1-2.1 8.2-2.1m0-4c-3.8 0-7.2.9-10.3 2.6-3.1 1.7-5.5 4.1-7.2 7.1-1.8 3-2.6 6.4-2.6 10.1 0 3.7.9 7.1 2.6 10.1 1.8 3 4.2 5.4 7.2 7.1 3.1 1.7 6.5 2.6 10.3 2.6s7.2-.9 10.3-2.6 5.5-4.1 7.2-7.1c1.8-3 2.6-6.4 2.6-10.1 0-3.7-.9-7.1-2.6-10.1-1.8-3-4.2-5.4-7.2-7.1-3.1-1.8-6.5-2.6-10.3-2.6z"
            class="st0"
          />
          <path
            d="M29.9 53.3c-.7 0-1.3.2-1.9.5s-1 .7-1.3 1.3c-.3.5-.5 1.2-.5 1.8s.2 1.3.5 1.8.8 1 1.3 1.3c.6.3 1.2.5 1.9.5s1.3-.2 1.9-.5c.6-.3 1-.7 1.3-1.3.3-.5.5-1.2.5-1.8s-.2-1.3-.5-1.8-.8-1-1.3-1.3c-.6-.3-1.2-.5-1.9-.5zm71.1 0c-.7 0-1.3.2-1.9.5s-1 .7-1.3 1.3c-.3.5-.5 1.2-.5 1.8s.2 1.3.5 1.8.8 1 1.3 1.3c.6.3 1.2.5 1.9.5s1.3-.2 1.9-.5 1-.7 1.3-1.3c.3-.5.5-1.2.5-1.8s-.2-1.3-.5-1.8-.8-1-1.3-1.3c-.6-.3-1.2-.5-1.9-.5z"
            class="st0"
          />
          <path
            d="M73.4 26.9v59m-28.2-59H100"
            style="fill:none;stroke:#ef4444;stroke-width:4;stroke-miterlimit:10"
          />
          <path
            d="M42.2 89.6v4.8c9.1 5.6 19.8 8.9 31.3 8.9s22.2-3.3 31.3-8.9v-4.8c-8.9 6.1-19.7 9.6-31.3 9.6s-22.4-3.5-31.3-9.6zM156.7 79c-1.4 0-2.5-.4-3.3-1.2-.7-.8-1.1-1.9-1.1-3.2v-28H146v-3.4h4.1c1 0 1.6-.2 2-.6.4-.4.5-1.1.5-2.1v-7.3h3.6v10h8.1v3.4h-8.1v29h7.6V79h-7.1zM184.7 79.8c-2.4 0-4.5-.4-6.5-1.3-1.9-.8-3.6-2.1-5-3.7s-2.4-3.6-3.1-5.9c-.7-2.3-1.1-5-1.1-7.9s.4-5.6 1.1-7.9c.7-2.3 1.8-4.3 3.1-5.9 1.4-1.6 3-2.8 4.9-3.7 1.9-.9 4.1-1.3 6.4-1.3 2.3 0 4.4.4 6.2 1.3 1.9.9 3.5 2.1 4.8 3.6 1.3 1.5 2.3 3.4 3 5.6.7 2.2 1.1 4.6 1.1 7.2v1.9h-26.5v1.8c0 1.9.3 3.6.8 5.1.5 1.6 1.3 2.9 2.3 4 1 1.1 2.2 2 3.7 2.6 1.4.6 3.1.9 4.9.9 5.2 0 8.8-2.4 10.9-7.2l2.9 1.9c-1.1 2.6-2.9 4.8-5.3 6.3-2.2 1.9-5.2 2.6-8.6 2.6zm0-34c-1.7 0-3.3.3-4.7.9-1.4.6-2.6 1.5-3.6 2.6s-1.8 2.5-2.3 4c-.5 1.6-.8 3.3-.8 5.1v.3h22.2v-.6c0-1.9-.3-3.6-.8-5.1-.5-1.6-1.2-2.9-2.2-4-1-1.1-2.1-1.9-3.4-2.5-1.4-.4-2.8-.7-4.4-.7zM202.7 79 216 60.9l-12.8-17.8h4.7l10.2 14.6h.2l10.4-14.6h4.5l-12.7 17.5L233.6 79h-4.7l-10.6-15.1h-.1l-11 15.1h-4.5zM246.3 79c-1.4 0-2.5-.4-3.3-1.2-.7-.8-1.1-1.9-1.1-3.2v-28h-6.2v-3.4h4.1c1 0 1.6-.2 2-.6.4-.4.5-1.1.5-2.1v-7.3h3.6v10h8.1v3.4h-8.1v29h7.6V79h-7.2zM289.4 79.8c-2.4 0-4.5-.4-6.4-1.3-1.9-.8-3.5-2.1-4.9-3.7-1.4-1.6-2.4-3.6-3.2-5.9-.7-2.3-1.1-5-1.1-7.9s.4-5.6 1.1-7.9c.7-2.3 1.8-4.3 3.2-5.9 1.4-1.6 3-2.8 4.9-3.7 1.9-.9 4.1-1.3 6.4-1.3s4.5.4 6.4 1.3c1.9.9 3.5 2.1 4.9 3.7 1.4 1.6 2.4 3.6 3.2 5.9.7 2.3 1.1 4.9 1.1 7.9s-.4 5.6-1.1 7.9c-.7 2.3-1.8 4.3-3.2 5.9-1.4 1.6-3 2.8-4.9 3.7-1.9.9-4 1.3-6.4 1.3zm0-3.5c3.5 0 6.3-1.1 8.3-3.3 2-2.2 3-5.4 3-9.7v-4.5c0-4.2-1-7.4-3-9.6-2-2.2-4.8-3.3-8.3-3.3s-6.3 1.1-8.3 3.3c-2 2.2-3 5.4-3 9.7v4.5c0 4.2 1 7.4 3 9.6 2 2.2 4.8 3.3 8.3 3.3zM313.4 79V43.2h4v6.4h.3c.7-1.7 1.9-3.2 3.6-4.5 1.7-1.3 4.1-2 7.1-2h2.4V47h-3.1c-3 0-5.4.7-7.4 2-1.9 1.3-2.9 3.1-2.9 5.5V79h-4zM349 79.8c-4.9 0-8.8-1.6-11.4-4.9-2.7-3.3-4-7.9-4-13.9s1.3-10.6 4-13.9c2.7-3.3 6.5-4.9 11.4-4.9 3.3 0 6 .7 8 2.2 2.1 1.4 3.6 3.4 4.7 5.7l-3.4 1.7c-.8-2-2-3.5-3.5-4.5s-3.5-1.5-5.8-1.5c-3.6 0-6.4 1.2-8.3 3.5-1.9 2.3-2.9 5.4-2.9 9.2v5c0 3.8 1 6.8 2.9 9.2 1.9 2.3 4.7 3.5 8.3 3.5 2.5 0 4.5-.5 6.2-1.6 1.7-1.1 3-2.6 4.1-4.6l2.9 2c-1.2 2.4-2.8 4.3-5 5.7s-4.9 2.1-8.2 2.1zM369.4 27.2h4v21.6h.2c.8-1.9 2-3.4 3.7-4.7 1.7-1.2 4-1.9 6.9-1.9 3.8 0 6.8 1.2 8.9 3.5 2.1 2.4 3.2 5.7 3.2 10.1v23h-4V56.7c0-3.6-.8-6.3-2.3-8.1-1.6-1.8-3.8-2.7-6.8-2.7-1.3 0-2.5.2-3.6.5-1.2.3-2.2.8-3.1 1.5-.9.7-1.6 1.5-2.2 2.5-.5 1-.8 2.2-.8 3.5V79h-4V27.2zM419.9 79.8c-2.4 0-4.5-.4-6.5-1.3s-3.6-2.1-5-3.7-2.4-3.6-3.2-5.9c-.7-2.3-1.1-5-1.1-7.9s.4-5.6 1.1-7.9 1.8-4.3 3.2-5.9c1.4-1.6 3-2.8 4.9-3.7 1.9-.9 4.1-1.3 6.4-1.3 2.3 0 4.4.4 6.2 1.3 1.9.9 3.5 2.1 4.8 3.6 1.3 1.5 2.3 3.4 3 5.6.7 2.2 1.1 4.6 1.1 7.2v1.9h-26.5v1.8c0 1.9.3 3.6.8 5.1s1.3 2.9 2.3 4c1 1.1 2.2 2 3.7 2.6 1.4.6 3.1.9 4.9.9 5.2 0 8.8-2.4 10.8-7.2l2.9 1.9c-1.1 2.6-2.9 4.8-5.3 6.3-2.2 1.9-5.1 2.6-8.5 2.6zm-.1-34c-1.7 0-3.3.3-4.7.9-1.4.6-2.6 1.5-3.6 2.6s-1.8 2.5-2.3 4c-.5 1.6-.8 3.3-.8 5.1v.3h22.2v-.6c0-1.9-.3-3.6-.8-5.1-.5-1.6-1.2-2.9-2.2-4-1-1.1-2.1-1.9-3.4-2.5-1.4-.4-2.8-.7-4.4-.7zM453.5 79.8c-3.1 0-5.8-.6-8-1.8s-4.1-2.9-5.8-5.1l2.9-2.3c1.5 2 3.1 3.4 4.9 4.3 1.8.9 3.8 1.4 6.2 1.4 2.8 0 4.9-.6 6.4-1.8 1.5-1.2 2.2-2.8 2.2-5 0-1.9-.6-3.4-1.7-4.5s-3-1.8-5.6-2.2l-2.9-.5c-1.6-.2-3.1-.6-4.5-1.1-1.4-.5-2.5-1.1-3.5-1.9-1-.8-1.7-1.8-2.2-2.9-.5-1.1-.8-2.5-.8-4.2 0-1.7.3-3.1.9-4.4.6-1.3 1.5-2.3 2.6-3.2 1.1-.8 2.4-1.5 3.9-1.9 1.5-.4 3.1-.6 4.8-.6 3 0 5.4.5 7.3 1.5 1.9 1 3.5 2.4 4.9 4l-2.7 2.4c-.9-1.1-2.2-2.2-3.7-3.1-1.6-1-3.6-1.4-6.1-1.4-2.6 0-4.6.6-6 1.7-1.4 1.1-2.1 2.7-2.1 4.8 0 2.1.6 3.6 1.9 4.6 1.3.9 3.2 1.6 5.8 2l2.9.4c3.6.6 6.3 1.6 8.1 3.3 1.8 1.6 2.6 3.9 2.6 6.8 0 3.4-1.1 6-3.4 7.8-2.3 2-5.4 2.9-9.3 2.9zM480.8 79c-1.4 0-2.5-.4-3.3-1.2-.7-.8-1.1-1.9-1.1-3.2v-28h-6.2v-3.4h4.1c1 0 1.6-.2 2-.6.3-.4.5-1.1.5-2.1v-7.3h3.6v10h8.1v3.4h-8.1v29h7.6V79h-7.2zM496.4 79V43.2h4v6.4h.3c.7-1.7 1.9-3.2 3.6-4.5 1.7-1.3 4.1-2 7.1-2h2.4V47h-3.2c-3 0-5.4.7-7.3 2-1.9 1.3-2.9 3.1-2.9 5.5V79h-4zM544.1 79c-1.5 0-2.7-.4-3.4-1.2-.7-.8-1.1-1.9-1.2-3.2v-1.3h-.3c-.8 2-2.1 3.6-3.9 4.8s-4.1 1.8-6.9 1.8c-3.8 0-6.7-.9-8.8-2.8-2.1-1.8-3.1-4.5-3.1-7.8 0-3.2 1.1-5.7 3.4-7.6 2.3-1.9 6-2.8 11.2-2.8h8.3v-4.2c0-5.9-3.1-8.9-9.2-8.9-2.4 0-4.4.5-6 1.5-1.6 1-2.9 2.4-3.8 4.3l-2.5-2.1c1-2.1 2.5-3.8 4.5-5.1 2-1.3 4.7-2 7.9-2 4.2 0 7.4 1.1 9.7 3.2 2.2 2.1 3.4 5.1 3.4 8.8v21.3h4.8V79h-4.1zm-15.2-2.6c1.4 0 2.8-.2 4.1-.6 1.3-.4 2.4-.9 3.3-1.6 1-.7 1.7-1.5 2.2-2.5.5-1 .8-2.1.8-3.3v-6.7H531c-3.6 0-6.2.6-7.8 1.7-1.6 1.1-2.4 2.7-2.4 4.7V70c0 2.1.7 3.7 2.2 4.8 1.5 1.1 3.5 1.6 5.9 1.6zM560.9 79c-1.4 0-2.5-.4-3.3-1.2-.7-.8-1.1-1.9-1.1-3.2v-28h-6.2v-3.4h4.1c1 0 1.6-.2 2-.6.3-.4.5-1.1.5-2.1v-7.3h3.6v10h8.1v3.4h-8.1v29h7.6V79h-7.2zM588.9 79.8c-2.4 0-4.5-.4-6.4-1.3-1.9-.8-3.5-2.1-4.9-3.7-1.4-1.6-2.4-3.6-3.2-5.9-.7-2.3-1.1-5-1.1-7.9s.4-5.6 1.1-7.9c.7-2.3 1.8-4.3 3.2-5.9 1.4-1.6 3-2.8 4.9-3.7 1.9-.9 4.1-1.3 6.4-1.3s4.5.4 6.4 1.3c1.9.9 3.5 2.1 4.9 3.7 1.4 1.6 2.4 3.6 3.2 5.9.7 2.3 1.1 4.9 1.1 7.9s-.4 5.6-1.1 7.9c-.7 2.3-1.8 4.3-3.2 5.9-1.4 1.6-3 2.8-4.9 3.7-1.9.9-4 1.3-6.4 1.3zm0-3.5c3.5 0 6.3-1.1 8.3-3.3s3-5.4 3-9.7v-4.5c0-4.2-1-7.4-3-9.6-2-2.2-4.8-3.3-8.3-3.3s-6.3 1.1-8.3 3.3c-2 2.2-3 5.4-3 9.7v4.5c0 4.2 1 7.4 3 9.6 2 2.2 4.8 3.3 8.3 3.3zM612.9 79V43.2h4v6.4h.3c.7-1.7 1.9-3.2 3.6-4.5 1.7-1.3 4.1-2 7.1-2h2.4V47h-3.2c-3 0-5.4.7-7.3 2-1.9 1.3-2.9 3.1-2.9 5.5V79h-4z"
            class="st0"
          />
        </svg>
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

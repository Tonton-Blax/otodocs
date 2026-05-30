<script>
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import FlexSearch from "flexsearch";

  let searchTerm = $state("");
  let results = $state([]);
  let ready = $state(false);
  let open = $state(false);
  let inputEl;

  /** @type {FlexSearch.Index} */
  let postsIndex;
  /** @type {{ slug?: string; title: string; content: string }[]} */
  let posts = [];

  function createPostsIndex(data) {
    postsIndex = new FlexSearch.Index({ tokenize: "forward" });
    data.forEach((post, i) => {
      const item = `${post.title} ${post.content}`;
      postsIndex.add(i, item);
    });
    posts = data;
  }

  function searchPostsIndex(searchTerm) {
    const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const res = postsIndex.search(match);
    return res
      .map((index) => posts[index])
      .map(({ slug, title, content }) => ({
        slug,
        title: replaceTextWithMarker(title, match),
        content: getMatches(content, match),
      }));
  }

  function getMatches(text, searchTerm, limit = 1) {
    const regex = new RegExp(searchTerm, "gi");
    const indexes = [];
    let matches = 0;
    let match;
    while ((match = regex.exec(text)) !== null && matches < limit) {
      indexes.push(match.index);
      matches++;
    }
    return indexes.map((index) => {
      const start = index - 20;
      const end = index + 80;
      const excerpt = text.substring(start, end).trim();
      return `...${replaceTextWithMarker(excerpt, searchTerm)}...`;
    });
  }

  function replaceTextWithMarker(text, match) {
    const regex = new RegExp(match, "gi");
    return text.replaceAll(regex, (m) => `<mark>${m}</mark>`);
  }

  onMount(async () => {
    try {
      const data = await fetch(`${base}/search.json`).then((r) => r.json());
      createPostsIndex(data);
      ready = true;
    } catch (e) {
      console.error("Failed to load search index:", e);
    }
  });

  let debounceTimer;

  $effect(() => {
    clearTimeout(debounceTimer);
    const term = searchTerm;

    if (ready && term.length > 1) {
      debounceTimer = setTimeout(() => {
        results = searchPostsIndex(term).slice(0, 10);
        open = results.length > 0;
      }, 300);
    } else {
      results = [];
      open = false;
    }

    return () => clearTimeout(debounceTimer);
  });

  function handleKeydown(e) {
    if (e.key === "Escape") {
      open = false;
      searchTerm = "";
    }
  }

  function handleClickOutside(e) {
    if (inputEl && !inputEl.contains(e.target)) {
      open = false;
    }
  }
</script>

<svelte:window on:click={handleClickOutside} />

<div class="search-wrapper" bind:this={inputEl}>
  <input
    bind:value={searchTerm}
    placeholder="Search docs..."
    autocomplete="off"
    spellcheck="false"
    type="search"
    onkeydown={handleKeydown}
    onfocus={() => { if (results.length > 0) open = true; }}
  />

  {#if open && results.length > 0}
    <div class="search-results">
      <ul>
        {#each results as result}
          <li>
            <a href="{base}/{result.slug}" onclick={() => { open = false; searchTerm = ""; }}>
              {@html result.title}
            </a>
            <p>{@html result.content}</p>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .search-wrapper {
    position: relative;
    width: 100%;
    max-width: 300px;
  }

  input {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid var(--svp-c-border, #e5e7eb);
    border-radius: 0.5rem;
    background: var(--svp-c-bg, #fff);
    color: var(--svp-c-text, #1a1a1a);
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.2s;
  }

  input:focus {
    border-color: var(--svp-c-primary, #ea580c);
  }

  .search-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 0.5rem;
    max-height: 60vh;
    overflow-y: auto;
    background: var(--svp-c-bg, #fff);
    border: 1px solid var(--svp-c-border, #e5e7eb);
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 100;
    padding: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.75rem;
  }

  li {
    padding: 0.5rem;
    border-bottom: 1px solid var(--svp-c-border, #e5e7eb);
  }

  li:last-child {
    border-bottom: none;
  }

  a {
    font-weight: 600;
    color: var(--svp-c-text, #1a1a1a);
    text-decoration: none;
    font-size: 0.875rem;
  }

  a:hover {
    color: var(--svp-c-primary, #ea580c);
  }

  p {
    margin: 0.25rem 0 0;
    font-size: 0.75rem;
    color: var(--svp-c-text-2, #666);
    line-height: 1.4;
  }

  :global(mark) {
    background: rgba(234, 88, 12, 0.2);
    color: inherit;
    padding: 0 2px;
    border-radius: 2px;
  }
</style>

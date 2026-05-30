<script>
  import { page } from "$app/stores";
  import { seo } from "$lib/seo.js";

  let {
    title = seo.title,
    description = seo.description,
    keywords = seo.keywords,
    ogType = "website",
    ogImage = seo.image,
    ogUrl,
    article,
    schema,
  } = $props();

  const canonical = $derived(ogUrl ?? `${seo.url}${$page.url.pathname}`);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OtO",
    url: "https://oto.software",
    logo: {
      "@type": "ImageObject",
      url: seo.image,
    },
    sameAs: [
      "https://oto.software",
      "https://www.youtube.com/@oto.software",
      "https://documentation.oto.software",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seo.siteName,
    url: seo.url,
    publisher: {
      "@type": "Organization",
      name: "OtO",
      url: "https://oto.software",
    },
  };

  const schemas = $derived.by(() => {
    const list = [organizationSchema, webSiteSchema];
    if (schema) {
      if (Array.isArray(schema)) {
        list.push(...schema);
      } else {
        list.push(schema);
      }
    }
    return list;
  });
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  {#if keywords}
    <meta name="keywords" content={keywords} />
  {/if}
  <link rel="canonical" href={canonical} />

  <meta property="og:type" content={ogType} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:url" content={canonical} />
  <meta property="og:site_name" content={seo.siteName} />
  <meta property="og:locale" content="en_US" />

  {#if article}
    {#if article.publishedTime}
      <meta property="article:published_time" content={article.publishedTime} />
    {/if}
    {#if article.modifiedTime}
      <meta property="article:modified_time" content={article.modifiedTime} />
    {/if}
    {#if article.author}
      <meta property="article:author" content={article.author} />
    {/if}
    {#if article.tags}
      {#each article.tags as tag (tag)}
        <meta property="article:tag" content={tag} />
      {/each}
    {/if}
  {/if}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />

  {#each schemas as s, i (i)}
    {@html `<script type="application/ld+json">${JSON.stringify(s)}</script>`}
  {/each}
</svelte:head>

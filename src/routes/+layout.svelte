<script>
  import "$lib/app.css";
  import { page } from "$app/stores";
  import SeoHead from "$lib/components/SeoHead.svelte";
  import LDTag from "$lib/components/LDTag.svelte";
  import {
    createArticleSchema,
    createBreadcrumbSchema,
    createHowToSchema,
    createFAQSchema
  } from "$lib/utils/json-ld.js";

  let { children } = $props();

  function extractPathInfo(path) {
    const parts = path.split('/').filter(Boolean);
    let category = '';
    let subcategory = '';

    if (parts.length > 1 && parts[0] === 'docs') {
      category = parts[1] || '';
      subcategory = parts[2] || '';
    }

    return {
      category: formatPathSegment(category),
      subcategory: formatPathSegment(subcategory)
    };
  }

  function formatPathSegment(segment) {
    if (!segment) return '';
    return segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }

  let pathInfo = $derived(extractPathInfo($page.url.pathname));
  let isDocsPage = $derived($page.url.pathname.includes('/docs/'));
  let isGettingStartedPage = $derived(
    pathInfo.subcategory === 'Get Started' ||
    $page.url.pathname.includes('get-started') ||
    $page.url.pathname.includes('system-requirements') ||
    $page.url.pathname.includes('install')
  );
  let isHowToPage = $derived(
    isGettingStartedPage ||
    $page.url.pathname.includes('guide') ||
    $page.url.pathname.includes('tutorial')
  );

  let title = $derived(isDocsPage ? `${pathInfo.subcategory || 'Documentation'} | OtO Documentation` : undefined);
  let description = $derived(isDocsPage ? `Learn about ${pathInfo.subcategory || pathInfo.category || 'OtO'} in the official OtO documentation.` : undefined);

  let articleSchema = $derived(isDocsPage ?
    createArticleSchema({
      title: title || 'OtO Documentation',
      description: description || '',
      url: `https://documentation.oto.software${$page.url.pathname}`,
      category: pathInfo.category
    }) : null);

  let breadcrumbSchema = $derived(isDocsPage ?
    createBreadcrumbSchema({
      items: [
        {
          name: "OtO Documentation",
          url: "https://documentation.oto.software/docs/",
          position: 1
        },
        {
          name: pathInfo.category || "Documentation",
          url: `https://documentation.oto.software/docs/${$page.url.pathname.split('/')[2] || ""}`,
          position: 2
        },
        {
          name: pathInfo.subcategory || title || "",
          url: `https://documentation.oto.software${$page.url.pathname}`,
          position: 3
        }
      ]
    }) : null);

  let howToSchema = $derived(isHowToPage ?
    createHowToSchema({
      title: title || 'OtO Documentation',
      description: description || ''
    }) : null);

  let faqSchema = $derived(isGettingStartedPage ?
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
    }) : null);

  let allSchemas = $derived.by(() => {
    const schemas = [];
    if (articleSchema) schemas.push(articleSchema);
    if (breadcrumbSchema) schemas.push(breadcrumbSchema);
    if (howToSchema) schemas.push(howToSchema);
    if (faqSchema) schemas.push(faqSchema);
    return schemas;
  });
</script>

<SeoHead
  {title}
  {description}
  ogType={isDocsPage ? "article" : "website"}
  schema={allSchemas}
/>

{@render children()}

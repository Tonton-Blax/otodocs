/**
 * Serializes a Schema.org object into a script tag with ld+json type
 * @param schema - The Schema.org object to serialize
 * @returns - HTML string with script tag containing the serialized schema
 */
export function serializeSchema(schema) {
  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
}

/**
 * Creates a TechArticle schema for documentation pages
 */
export function createArticleSchema(params) {
  const { title, description, url, category, datePublished, dateModified } = params;
  
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": title,
    "description": description || "",
    "author": {
      "@type": "Organization",
      "name": "OtO Software",
    },
    "publisher": {
      "@type": "Organization",
      "name": "OtO Software",
      "logo": {
        "@type": "ImageObject",
        "url": "https://documentation.oto.software/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "OtO Documentation",
      "url": "https://documentation.oto.software/docs/"
    },
    "about": {
      "@type": "SoftwareApplication",
      "name": "OtO Software",
      "applicationCategory": "Teleprompter",
      "operatingSystem": "Windows, macOS"
    },
    "articleSection": category || "Documentation",
    ...(datePublished && { "datePublished": datePublished }),
    ...(dateModified && { "dateModified": dateModified })
  };
}

/**
 * Creates a BreadcrumbList schema for documentation pages
 */
export function createBreadcrumbSchema(params) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": params.items.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Creates a HowTo schema for tutorial pages
 */
export function createHowToSchema(params) {
  const { title, description, steps } = params;  
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description || "",
    ...(steps && steps.length > 0 && { 
      "step": steps.map(step => ({
        "@type": "HowToStep",
        "name": step.name,
        "text": step.text
      }))
    }),
    "tool": {
      "@type": "Thing",
      "name": "OtO Software"
    }
  };
}

/**
 * Creates a FAQPage schema
 */
export function createFAQSchema(params) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": params.questions.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
} 
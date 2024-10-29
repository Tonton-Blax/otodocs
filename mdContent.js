import fs from "fs";
import path from "path";
import tinyGlob from "tiny-glob";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

function replaceFrontmatterVariables(content, frontmatter) {
  return content.replace(/\{\$frontmatter\.(\w+)\}/g, (match, key) => {
    return frontmatter[key] || match;
  });
}

function cleanSlug(relativePath) {
  return (
    "/" +
    relativePath
      .replace(/\.md$/, "")
      .replace(/\[...\d+\]/g, "")
      .replace(/\/\+page$/, "")
      .split("/")
      .filter(Boolean)
      .join("/")
  );
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "");
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function stripCustomSyntax(content) {
  let processedContent = content;

  // Function to extract text content from step blocks
  function extractStepContent(stepBlock) {
    const titleMatch = stepBlock.match(/title="([^"]+)"/);
    const contentMatch = stepBlock.match(/"\s*([\s\S]*?)!!!/);
    const title = titleMatch ? titleMatch[1] : "";
    const content = contentMatch ? contentMatch[1].trim() : "";
    return title + "\n" + content;
  }

  // Handle :::steps blocks
  processedContent = processedContent.replace(
    /:::steps\s*([\s\S]*?):::/g,
    (match, stepsContent) => {
      // Extract content from each !!!step block
      const stepTexts = [];
      const stepRegex = /!!!step.*?\s*([\s\S]*?)!!!/g;
      let stepMatch;

      while ((stepMatch = stepRegex.exec(stepsContent)) !== null) {
        stepTexts.push(extractStepContent(stepMatch[0]));
      }

      return stepTexts.join("\n\n");
    }
  );

  // Handle standalone admonition blocks
  processedContent = processedContent.replace(
    /:::admonition.*?\s*([\s\S]*?):::/g,
    (match, content) => content.trim()
  );

  // Remove any remaining ::: or !!! syntax
  processedContent = processedContent
    .replace(/:::\w+/g, "")
    .replace(/!!!\w+.*?!/g, "")
    .replace(/:::/g, "")
    .replace(/!!!/g, "");

  // Clean up excessive newlines
  processedContent = processedContent.replace(/\n{3,}/g, "\n\n").trim();

  return processedContent;
}

function extractSections(content, baseSlug) {
  const sections = [];
  const lines = content.split("\n");
  let currentSection = "";
  let currentTitle = "";

  lines.forEach((line) => {
    const h2Match = line.match(/^##\s+(.+)$/);
    if (h2Match) {
      if (currentTitle) {
        sections.push({
          title: currentTitle,
          content: stripHtml(
            md.render(stripCustomSyntax(currentSection))
          ).trim(),
          slug: `${baseSlug}#${slugify(currentTitle)}`,
        });
      }
      currentTitle = h2Match[1];
      currentSection = "";
    } else {
      currentSection += line + "\n";
    }
  });

  if (currentTitle) {
    sections.push({
      title: currentTitle,
      content: stripHtml(md.render(stripCustomSyntax(currentSection))).trim(),
      slug: `${baseSlug}#${slugify(currentTitle)}`,
    });
  }

  return sections;
}

export default function markdownJsonPlugin() {
  return {
    name: "markdown-json-plugin",
    async buildEnd() {
      const docsDir = path.resolve(process.cwd(), "src/routes/docs");
      const outputFile = path.resolve(
        process.cwd(),
        "src/routes/search.json/posts.json"
      );

      const markdownFiles = await tinyGlob(`${docsDir}/**/*.md`);

      let pages = await Promise.all(
        markdownFiles.map(async (file) => {
          const content = await fs.promises.readFile(file, "utf-8");
          const { data, content: markdownContent } = matter(content);
          const processedContent = replaceFrontmatterVariables(
            markdownContent,
            data
          );
          const cleanedContent = stripCustomSyntax(processedContent);
          const htmlContent = md.render(cleanedContent);
          const plainTextContent = stripHtml(htmlContent).trim();
          const relativePath = path.relative(docsDir, file);
          const baseSlug = "docs" + cleanSlug(relativePath);

          const mainPage = {
            title: data.title || path.basename(file, ".md"),
            content: plainTextContent,
            slug: baseSlug,
          };

          const sections = extractSections(processedContent, baseSlug);

          return [mainPage, ...sections];
        })
      );

      pages = pages.flat();

      await fs.promises.writeFile(outputFile, JSON.stringify(pages, null, 2));

      console.log(`Generated JSON file: ${outputFile}`);
    },
  };
}

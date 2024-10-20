import fs from "fs";
import path from "path";
import tinyGlob from "tiny-glob";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

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

      const pages = await Promise.all(
        markdownFiles.map(async (file) => {
          const content = await fs.promises.readFile(file, "utf-8");
          const { data, content: markdownContent } = matter(content);
          const processedContent = replaceFrontmatterVariables(
            markdownContent,
            data
          );
          const htmlContent = md.render(processedContent);
          const plainTextContent = stripHtml(htmlContent).trim();
          const relativePath = path.relative(docsDir, file);
          const slug = "docs" + cleanSlug(relativePath);

          return {
            title: data.title || path.basename(file, ".md"),
            content: plainTextContent,
            slug: slug,
          };
        })
      );

      await fs.promises.writeFile(outputFile, JSON.stringify(pages, null, 2));
    },
  };
}
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

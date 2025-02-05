import { c as isString } from "../../chunks/unit.js";
import { b as base } from "../../chunks/paths.js";
function slugToRequestParam(slug) {
  return normalizePath(slug).replace(/\//g, "_");
}
function normalizePath(path) {
  return path.replace(/^\//, "").replace(/\/$/, "");
}
async function loadKitDocsMeta(event) {
  const slug = event.url.pathname;
  try {
    const url = `${base}/kit-docs/${slug === "/" ? "index" : slugToRequestParam(slug.replace(/\.html$/, ""))}`;
    const res = await event.fetch(url + ".meta");
    return await res.json();
  } catch (e) {
    return null;
  }
}
async function loadKitDocsSidebar(path, event) {
  const matchedPath = matchSidebarPath(event.url, path);
  if (matchedPath === null)
    return null;
  try {
    const res = await event.fetch(`${base}/kit-docs/${matchedPath === "" ? "index" : slugToRequestParam(matchedPath)}.sidebar`);
    return res.json();
  } catch (e) {
    return null;
  }
}
function matchSidebarPath(url, path) {
  if (isString(path))
    return path;
  const currentPath = url.pathname;
  const sortedPaths = Object.keys(path).sort((a, b) => b.length - a.length);
  for (const possiblePath of sortedPaths) {
    if (currentPath.startsWith(possiblePath)) {
      return path[possiblePath];
    }
  }
  return null;
}
function createKitDocsLoader(options = {}) {
  return async (event) => {
    const meta = await loadKitDocsMeta(event);
    const result = {
      ...options.sidebar ? {
        meta,
        sidebar: await loadKitDocsSidebar(options.sidebar, event)
      } : { meta }
    };
    return result;
  };
}
const prerender = true;
const load = createKitDocsLoader({
  sidebar: {
    "/": null,
    "/docs": "/docs"
  }
});
export {
  load,
  prerender
};

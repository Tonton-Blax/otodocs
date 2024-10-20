import FlexSearch from "flexsearch";

/** @type {import('flexsearch').Index}  */
let postsIndex;
/** @type {{ slug?: string; title: string; content: string }[]} */
let posts;

/** @param {{ slug?: string; title: string; content: string }[]} data */
export function createPostsIndex(data) {
  // create the posts index
  postsIndex = new FlexSearch.Index({ tokenize: "forward" });

  data.forEach((post, i) => {
    // index the title and content together
    const item = `${post.title} ${post.content}`;
    // add the item to the index 👍️
    postsIndex.add(i, item);
  });

  posts = data;
}

/** @param {string} searchTerm */
export function searchPostsIndex(searchTerm) {
  // escape special regex characters
  const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // return matching post indexes 💪
  const results = postsIndex.search(match);

  return (
    results
      // filter the posts based on the matched index
      .map((index) => posts[/** @type {number} */ (index)])
      // you can do whatever you want at this point 👌
      .map(({ slug, title, content }) => {
        return {
          slug,
          // replace match in title with a marker
          title: replaceTextWithMarker(title, match),
          // match words in post and replace matches with marker
          content: getMatches(content, match),
        };
      })
  );
}

/**
 * @param {string} text - The text to search within.
 * @param {string} searchTerm - The term to search for in the text.
 * @param {number} [limit=1] - Maximum number of matches to return.
 * @returns {string[]} Array of excerpts with the search term highlighted.
 */
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

/**
 * @param {string} text - The text to process.
 * @param {string} match - The term to be highlighted.
 * @returns {string} The text with highlighted search term.
 */
function replaceTextWithMarker(text, match) {
  const regex = new RegExp(match, "gi");
  return text.replaceAll(regex, (match) => `<mark>${match}</mark>`);
}

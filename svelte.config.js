import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter({}),
    paths: {
      relative: false,
    },
    prerender: {
      entries: ["*"],
      handleMissingId: "warn",
    },
  },
};

export default config;

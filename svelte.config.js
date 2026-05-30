import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const isElectron = process.env.ELECTRON_BUILD === "true";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter({
      pages: isElectron ? "build-electron" : "build",
      assets: isElectron ? "build-electron" : "build",
    }),
    paths: {
      relative: isElectron,
    },
    output: isElectron
      ? {
          bundleStrategy: "inline",
        }
      : undefined,
    prerender: {
      entries: ["*"],
      handleMissingId: "warn",
    },
  },
};

export default config;

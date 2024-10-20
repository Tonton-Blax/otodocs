import { sveltekit } from "@sveltejs/kit/vite";
import icons from "unplugin-icons/vite";
import kitDocs from "@svelteness/kit-docs/node";
import mdContent from "./mdContent.js";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [mdContent(), icons({ compiler: "svelte" }), kitDocs(), sveltekit()],
};

export default config;

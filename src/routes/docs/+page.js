import { redirect } from "@sveltejs/kit";

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load() {
  throw redirect(307, "/docs/oto-basics/get-started");
}
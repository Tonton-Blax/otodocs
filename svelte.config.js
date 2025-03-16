import adapter from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],

  kit: {
    //adapter: adapter({fallback: 'index2.html'}),
    adapter: adapter({}),
    paths: {
      //relative: true,
    },
    prerender: {
      entries: ['*'],
      handleMissingId: 'warn',
    },
  },
};

export default config;

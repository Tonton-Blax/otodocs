/** @type {import('svelte-sitemap').OptionsSvelteSitemap} */
const config = {
  domain: 'https://documentation.oto.software',
  outDir: '.vercel/output/static',
  trailingSlashes: true,
  changeFreq: 'weekly',
  ignore: ['**/search.json/**'],
};

export default config;

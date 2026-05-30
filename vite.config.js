import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'
import path from 'path'
import mdContent from './mdContent.js'

export default defineConfig({
  resolve: {
    alias: {
      $img: path.resolve('./src/img'),
      $search: path.resolve('./src/lib/components/Search.svelte'),
    },
  },
  plugins: [
    mdContent(),
    sveltepress({
      theme: defaultTheme({
        navbar: [
          { title: 'OtO Website', to: 'https://oto.software', external: true },
          { title: 'Documentation', to: '/docs/oto-basics/get-started/' },
        ],
        logo: '/logo.png',
        sidebar: {
          '/docs/': [
            {
              title: 'OtO Basics',
              collapsible: true,
              items: [
                { title: 'OtO at a glance', to: '/docs/oto-basics/get-started/' },
                { title: 'Licensing and updates', to: '/docs/oto-basics/licensing/' },
                { title: 'Editing text', to: '/docs/oto-basics/editing/' },
                { title: 'Rundown Panel', to: '/docs/oto-basics/rundown/' },
                { title: 'Prompting', to: '/docs/oto-basics/prompting/' },
                { title: 'Controllers in OtO', to: '/docs/oto-basics/controllers/' },
              ],
            },
            {
              title: 'Markers',
              collapsible: true,
              items: [
                { title: 'Standard Markers', to: '/docs/markers/standard-markers/' },
                { title: 'Action Markers', to: '/docs/markers/action-markers/' },
                { title: 'Network Action Markers', to: '/docs/markers/network-markers/' },
                { title: 'Powerpoint and Keynote Markers', to: '/docs/markers/powerpoint-setup/' },
              ],
            },
            {
              title: 'Advanced',
              collapsible: true,
              items: [
                { title: 'Default Keyboard Shortcuts', to: '/docs/advanced/shortcuts/' },
                { title: 'Overlays', to: '/docs/advanced/overlays/' },
                { title: 'Network Mode', to: '/docs/advanced/network/' },
                { title: 'FAQ and Troubleshooting', to: '/docs/advanced/faq/' },
                { title: 'Example setups', to: '/docs/advanced/example-setups/' },
              ],
            },
          ],
        },
        search: true,
        themeColor: {
          gradient: {
            start: '#a5cdfa',
            end: '#77a1ee',
          },
          primary: '#a5cdfa',
          hover: '#77a1ee',
        },
      }),
      siteConfig: {
        title: 'OtO Documentation',
        description: 'OtO teleprompter software documentation',
      },
    }),
  ],
})

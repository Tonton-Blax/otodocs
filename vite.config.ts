import { sveltekit } from '@sveltejs/kit/vite';
import kitDocsPlugin from '@svelteness/kit-docs/node';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		kitDocsPlugin({
			markdown: {
				components: [
					{ name: 'Image', type: 'inline', rule: 'image' },
					{ name: 'Blockquote', type: 'block', rule: 'blockquote' },
					{ name: 'Button', type: 'custom', container: { marker: '!' } },
					{ name: 'Icon', type: 'custom' },
					{ name: 'TextIcon', type: 'custom' },
					{ name: 'Number', type: 'custom' },
					{ name: 'Round', type: 'custom' },
					{ name: 'Q', type: 'custom' },
					{ name: 'ImageZoom', type: 'custom' },
				],
			},
		})
	],

});

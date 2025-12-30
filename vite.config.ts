import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
	plugins: [tailwindcss(), enhancedImages(), sveltekit(), devtoolsJson()],
	server: {
		fs: {
			allow: [`${searchForWorkspaceRoot(process.cwd())}/blog`]
		}
	}
});

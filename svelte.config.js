import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        // paths: {
        //     base: dev ? '' : '/svelte-saas',
        // },
        appDir: 'app_',
        adapter: adapter({
            pages: 'docs',
            assets: 'docs',
        }),

        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte'
    }
};

export default config;

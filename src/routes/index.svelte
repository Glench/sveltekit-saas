<script>
    import { base } from '$app/paths';
</script>
<svelte:head>
    <title>Launch Faster with the Full-stack SaaS Template for SvelteKit</title>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-FSJW8FC22N"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FSJW8FC22N');
    </script>
</svelte:head>

    <header>
        <div style="max-width: 550px; padding: 1rem;">
            <h1>Launch faster with the <span class="gradient">Svelte SaaS Starter Kit</span></h1>

            <p>A full-stack SaaS template built on SvelteKit that starts your project with all the features that are the same in every app.</p>

            <p>Focus on the unique parts of your app, save weeks of tedious coding, and launch faster. 🚀</p>
        </div>


        <form>
            <script async src="https://eomail1.com/form/3690e32d-68d0-11ec-96e5-06b4694bee2a.js" data-form="3690e32d-68d0-11ec-96e5-06b4694bee2a"></script>
        </form>

    </header>
    <section style="background: radial-gradient(50% 50% at 50% 50%, #6E7176 0%, #515D6A 100%); padding: 4rem 1.5rem;">
        <div class="card" style="border-radius:6px;">
            <h2 style="color: white;">Svelte SaaS 🚀</h2>
            <ul class="emoji">
                <li>User signup and auth</li>
                <li>Admin dashboards</li>
                <li>Stripe subscriptions</li>
                <li>Database models, forms, REST APIs, and more</li>
            </ul>
        </div>

        <div class="card">
            <h2>SvelteKit 🔥</h2>
            <ul>
                <li>Optimized full-stack apps with no configuration</li>
                <li>SEO and performance from server-side rendering</li>
                <li>Zippy UX from client-side hydration &amp; routing</li>
                <li>Stay in flow with instant hot-module reloading</li>
            </ul>
        </div>

 
        <div class="card">
            <h2>Svelte ❤️</h2>
            <ul>
                <li>Blazing fast UI components &mdash; no virtual DOM</li>
                <li>Tiny builds &mdash; no bloated JS</li>
                <li>Voted <a href="https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks">most-loved framework in the Stack Overflow developer survey</a> (beating out React, Rails, Django, and more!)</li>
            </ul>
        </div>
    </section>

    <section style="display: block; max-width: 800px; font-size: 2rem;">
        <h3>Guides</h3>
        <h4><a href="{base}/articles/sveltekit-github-pages-guide">How to Deploy SvelteKit Apps to Github Pages</a></h4>
    </section>


<style>
    :global(body) {
        background-color: white;
        color: rgba(77, 77, 77, 1);
        font-family: Inter, sans-serif;
        line-height: 1.5;
        margin: 0;
        overflow-x: hidden;
        padding: 0;
    }
    :global(.btn) {
        flex-grow: 0 !important;
    }
    :global(input[type="email"]) {
        margin-bottom: 0;
    }
    :global(.mastfoot) { /* remove email octopus branding */
        display: none !important;
    }
    :global(.emailoctopus-success-message) {
        color: #3ab73a !important;
    }

    section a {
        color: inherit;
    }
    header {
        max-width: 1080px;
        align-items: center; /* vertical centering */
        gap: 3rem;
    }
    header, section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 2rem auto;
        padding: 1.5rem;
    }
    h1 {
        font-family: Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 3rem;
        color: black;
        line-height: 1.2;
    }
    .gradient {
        -webkit-background-clip: text;
        -webkit-box-decoration-break: clone;
        -webkit-font-smoothing: subpixel-antialiased;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(180deg, #FF3E00 43.62%, #640000 100%);
        background-attachment: scroll;
        background-clip: text;
        background-color: rgba(0,0,0,0);
    }
    p {
        font-size: 1.15rem;
    }
    form {
        border: 1px solid #e9e9e9;
        border-radius: 5px;
        box-shadow: rgb(244, 244, 244) 2px 2px 10px 0px;
        box-sizing: border-box;
        color: rgb(0, 0, 0);
        display: block;
        padding: 1.7rem;
        width: 361px;
    }
    .card {
        max-width: 280px;
        color: rgba(198, 211, 222, 1);
        background-color: #2A3643;
        padding: 1.75rem;
        margin: 2rem;
        border-radius: 8px;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    }
    .card h2 {
        padding: 0;
        margin: 0;
        font-size: 2rem;
    }
    .card ul {
        margin: 0 0 0 1rem;
        padding: 0;
    }
    .card li {
        margin: 1rem 0;
    }
    .card ul.emoji {
        list-style: none;
        color: white;
    }
    .card ul.emoji li {
        font-size: 1.2rem;
        text-indent: -2rem;
        padding-left: 1rem;
    }
    .card ul.emoji li:before {
        content: "⭐️";
        margin-right: .5rem;
    }
</style>

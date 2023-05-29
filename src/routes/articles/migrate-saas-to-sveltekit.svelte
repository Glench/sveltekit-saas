<script>
    import { base, assets } from '$app/paths';
</script>
<svelte:head>
    <title>Reflections on Migrating my SaaS to SvelteKit</title>
</svelte:head>

<header style="padding: 0">
    <h1>Reflections on Migrating my SaaS To SvelteKit</h1>
</header>

<p>I run <a href="https://extensionpay.com">ExtensionPay</a>, a service to monetize Chrome extensions by letting developers easily add payments to their extensions.</p>

<p>Because I seriously enjoy working with <a href="https://svelte.dev/">Svelte</a>, I built ExtensionPay on top of a custom framework based around Svelte that would take care of all the server-side rendering, server/client communication, code-splitting, file minimizing, stylesheets, etc.</p>

<p>The framework was pretty nice for something I cobbled together, but had issues. One big one was startup time. My service would go down for way too long after restarting the app. Another issue was imports. It was difficult or impossible to import libraries client-side so I had to do annoying workarounds and that made me want to work on the code less. A custom framework can also be a businesses liability. So when <a href="https://svelte.dev/blog/announcing-sveltekit-1.0">SvelteKit 1.0 was announced</a> I really wanted to switch over.</p>

<p><a href="https://kit.svelte.dev">SvelteKit</a> is the framework I’ve dreamed about since I started full stack development in 2010. It not only takes care of all the nitty gritty details of code-splitting, stylesheets, minimization, caching, client-side code, server-side code, server-side rendering, client-side hydration, CSRF, performance, etc, but is basically boilerplate-free. SvelteKit is apparently a lot like Next or Nuxt, but built on top of Svelte so it's blazing fast and a delight to work with.</p>

<p>Working very slowly, it took me a few months to migrate ExtensionPay from my old custom framework to SvelteKit by hand. I deployed the new version on April 2, 2023. Here are some results.</p>

<h2>Lines of code</h2>

<p>Here’s a count of the lines of code in my <code>routes/</code> directory using <code>cloc</code>.</p>

<p>Before (my custom framework):</p>

<figure style="width:645px"><a href="{assets}/articles/migrate-saas-sveltekit/lines_of_code_before.png"><img style="width:645px" src="{assets}/articles/migrate-saas-sveltekit/lines_of_code_before.png" alt="Screenshot of cloc showing 4975 lines of code total"/></a></figure>

<p>After (SvelteKit):</p>

<figure style="width:647px"><a href="{assets}/articles/migrate-saas-sveltekit/lines_of_code_after.png"><img style="width:647px" src="{assets}/articles/migrate-saas-sveltekit/lines_of_code_after.png" alt="Screenshot of cloc output showing 4397 lines of code total"/></a></figure>

<p>Around 600 lines removed after the migration. That’s about a 12% reduction in code. My framework was already pretty lean so that's impressive.</p>

<p>Some of the code reduction was because there was a little duplicate code between pages, but most of it was just because SvelteKit removed the need for a lot of code. This is really great. As a solo founder, fewer lines of code to maintain and understand is a huge help.</p>

<h2>Performance</h2>

<figure style="width:815px"><a href="{assets}/articles/migrate-saas-sveltekit/performance.png"><img src="{assets}/articles/migrate-saas-sveltekit/performance.png" style="width:815px" alt="Plot of CPU performance over time. On April 2 there is a black vertical line indicating the time the new SvelteKit was deployed." /></a></figure>

<p>I launched the SvelteKit-based app near that black line on the plot. It’s a little hard to see with the spikes, but the overall performance of the SvelteKit-based app is a tiny bit worse. Before, the midday usage would pretty consistently top out around 20% CPU. Now midday usage is typically around 30%. Not a big deal, but will probably mean I need to upgrade the server sooner. So the SvelteKit team owes me some money 😛 jk</p>

<p>I was actually concerned the performance would be much worse. In my local load testing with the <code>ab</code> command-line utility the SvelteKit app had about <em>half</em> the performance of my previous app for basic routes. Luckily in practice that didn’t happen. Maybe my test was flawed.</p>

<h2>Feelings</h2>

<p>Overall, the migration and deploy went fairly smoothly. It was a lot of work to basically rewrite the app and make sure everything still worked, but I’m happy I did it.</p>

<p>Having switched over, I feel like my app is on a lot more solid foundation with SvelteKit. I feel fantastic developing with the framework and my app feels fantastic to use.</p>

<p>A few pain points I ran into working with SvelteKit:</p>

<ul>
  <li>It was surprisingly difficult to get a REPL working nicely with SvelteKit. For business reasons I often have the need to run custom one-off commands in a REPL or script, but because of various import issues, creating a REPL that knew about my app and database was a challenge. I eventually got it to work, but it wasn’t easy.</li>

  <li>Related to the above, SvelteKit is pretty new so there’s not a lot about it on the internet yet. When I run into issues, there’s less material I can search for that might have fixes. Luckily there was enough and the SvelteKit team was actually crazy responsive to bugs or forum posts I made, and this problem will diminish over time.</li>

  <li>One small but annoying issue is that when I load 3rd-party libraries in the <code>&lt;head&gt;</code> of a SvelteKit route over http(s), the script loads in a blocking way when rendered from the server and in a non-blocking way when rendered via client-side navigation. This caused my code to fail during client-side navigation but not server-side navigation and it’s only through luck that I caught the failure before launch. <a href="https://github.com/sveltejs/kit/issues/9096">I made an issue about this</a> that was closed as “well that’s just how it works” and a nice suggestion about how I might achieve my goals instead. Still, It was kind of tricky to figure out how to make a workaround that worked in all cases.</li>

  <li>As demonstrated earlier, real-world performance is a little worse than my previous custom framework. I’m not sure why this is. Maybe it's SvelteKit or maybe it's something I'm doing. Either way, it’s not so bad.</li>

  <li>The naming conventions for routes is a little bonkers. Now when I’m working on my app I have like 10 tabs open that all have the name <code>+page.server.ts</code>. 🙄 Does anyone know how I can make this better in vim?</li>
</ul>

<p>Some pleasures of working with SvelteKit:</p>

<ul>
  <li>The developer experience is phenomenal. Hot reloading is so much nicer than what I was using previously and all the built-in commands for testing work great.</li>

  <li>I’m really happy that SvelteKit allows parts of your app to be pre-rendered and others to be dynamic. I now pre-render my marketing pages (like this post!) which is great for performance. And the client-side routing also still works.</li>

  <li>Speaking of which, the client-side routing was a real unexpected pleasure. I assumed it was just extraneous, but it really does make my app feel a lot snappier and it’s just included automatically in SvelteKit without me having to do anything.</li>

  <li>Another unexpected pleasure was using TypeScript for static types and Playwright for end-to-end testing. Both give me an extra layer of confidence that my app is working as intended which is so important as a solo developer. Heck, I didn't set out to use Typescript or Playwright at all, but SvelteKit made them so easy to add that I just did it . And I'm so glad I did because I feel a lot more confident deploying code now.</li>

  <li>SvelteKit’s documentation is already quite good, and I know the team is also working on an interactive tutorial which is great. Good reference documentation is so helpful.</li>

  <li>I really love how forms work in SvelteKit. For whatever reason, working with forms in any other framework always felt so tedious to me. But the <a href="https://kit.svelte.dev/docs/form-actions">form actions API</a> means it’s so easy to make boilerlate-free forms that work without client-side JavaScript but can be easily upgraded to AJAX with basically no extra code using <code><a href="https://kit.svelte.dev/docs/form-actions#progressive-enhancement">enhance</a></code>. Before the migration, I was getting a surprising number of error notification emails about people submitting forms on my site that didn’t have JavaScript enabled. Now I get none, and all my forms work work with and without client-side JavaScript by default. And I actually enjoy creating them.</li>
</ul>

<p>Having my app on SvelteKit also comes with some other potential benefits. If I ever want to bring in another developer, it will be much easier to get them up to speed with SvelteKit than my own custom framework. And for the same reason, if I ever want to sell my app I imagine it will be an easier sell that it’s built on something well-supported and documented. Of course, this would be true for any well-known framework, but as I mentioned earlier I really love Svelte and dislike React so for me it’s an easy choice.</p>

<p>Overall, I’m really happy with SvelteKit and want to extend my sincere thanks for the SvelteKit team for working so hard on it, taking our feedback, and sharing it with us for free. It really is amazing.</p>

<p>I love it so much, in fact, that I'm taking what I've learned in my own app and developing a <a href="https://sveltekitsaas.com">SvelteKit SaaS starter template</a>.</p>


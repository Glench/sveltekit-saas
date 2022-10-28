<script>
    import { base, assets } from '$app/paths';
</script>
<svelte:head>
    <title>How to Deploy SvelteKit Apps to Github Pages</title>
</svelte:head>

<header style="padding: 0;">
    <h1>How to Deploy SvelteKit Apps to Github Pages</h1>
</header>

<p id="13fd6e12-4bef-4f0d-bfea-80eea5927559" class="">SvelteKit is an app framework based around the popular Svelte component library. SvelteKit is really awesome. You can deploy SvelteKit apps to any server-based, serverless, or even static files host you want!</p>
<p id="06626e4f-432e-4e4f-8b9e-7ceefc6235de" class="">In this guide we’ll show you how you can deploy SvelteKit apps to Github Pages, a popular free way to host static files directly from a Github repository.</p>


<h2 id="1fe6510c-a9a2-4a90-8eec-745b81648228" class="">Getting Started</h2>

<p id="79e653f5-b792-4cb8-b65f-f697304bca14" class="">Want to get up and running right away? Just use <strong><a href="https://github.com/Glench/sveltekit-github-pages-template">this Github template repository</a></strong>. It has everything you need already set up. Once you have that you can skip to the <a href="#80c176b7-13fe-482d-a0ec-ae33c89e983e">Configure Github Pages</a> section below.</p>
<p id="49b17068-71ef-4127-80a8-c89f4a436567" class="">Already have a Github repository you want to use but not SvelteKit? Skip to the <a href="#74dca68d-6d21-4e11-b9ed-c790962f55d9">Install SvelteKit</a> section below.</p>
<p id="8ec91792-500c-4dd1-90a9-6d86d8da6cc2" class="">Otherwise, you can continue with this section and learn how to create a SvelteKit Github repository from scratch. To do that we’ll need two things — a Github repository and a new SvelteKit project.</p>


<h2 id="71d350e2-a70f-4fd0-bc65-25e53add7a7c" class="">Create a new Github repository</h2>

<p id="14f14e08-2261-48f9-8b8c-ece9eeec3a14" class="">First, let’s make a new Github repository.</p>
<p id="448385a8-7a9d-46b7-8462-44b384899f07" class=""><a href="https://github.com/new">Here’s a link to Github’s create new repository page</a> (no repository will be made until you click the “Create repository” button on that page). The settings you should choose are:</p>
<ul id="ab7a68cc-223f-486e-b31a-4214cc626342" class="bulleted-list"><li style="list-style-type:disc">
        <strong>Repository name</strong>
        : Choose any name you like.</li></ul>
<ul id="eef823da-94c7-4418-a3a6-8d7aed616d85" class="bulleted-list"><li style="list-style-type:disc">
        <strong>Public / Private:</strong>
        If you have a free Github account, you’ll need to choose <strong>Public </strong>
        since Github only allows Github Pages hosting from public repositories for free accounts. If you have a paid Github Pro or Team account, you can choose either <strong>Public </strong>
        or <strong>Private.</strong>
    </li></ul>
    <ul id="67450d09-1cbc-4a75-82ad-1f5e2ec88048" class="bulleted-list"><li style="list-style-type:disc">
            <strong>Add a README file: </strong>
            Optional. We’ll add a README later, but you can add one now if you like.</li></ul>
    <ul id="af8dee55-5f84-47d7-82b3-e5cdd8ab438b" class="bulleted-list"><li style="list-style-type:disc">
            <strong>Add .gitignore:</strong>
            <strong>Checked</strong>
            . Choose “<strong>Node</strong>
            ” from the “.gitignore template” dropdown. This will make it so that unnecessary files aren’t checked into your repository.</li></ul>
    <ul id="34784b83-23b7-468a-baa1-f937c43f1766" class="bulleted-list"><li style="list-style-type:disc">
            <strong>Choose a license</strong>
            : Optional. Choose any license you want, or none. You can always add one later if you’re not sure.</li></ul>
    <figure id="24fd0473-7338-4054-a445-14c8d0fbda52" class="image">
        <img style="width:748px" src="{assets}/articles/sveltekit-github-pages-guide/github_new_repo_settings.png" alt="Screenshot of Github's new repository settings page"/>
    </figure>
    <p id="04252290-fdab-4b91-b78a-eebcedd563b1" class="">Once you’re happy with your settings, click the <strong>Create repository</strong> button and you’ll have a new blank Github repository.</p>
    <p id="8acb4fdd-b375-4ffb-bbcb-ad5855d240f3" class="">To get the repository on your computer, you can run <code>git clone &lt;repository url&gt;</code> in a terminal or use your favorite git software.</p>


    <h2 id="74dca68d-6d21-4e11-b9ed-c790962f55d9" class="">Install SvelteKit</h2>
    <p id="be06d8e4-5f87-48aa-b11e-c5985c80d9e2" class="">Now we can install SvelteKit. Open a terminal to the Github repository on your computer and run the following command:</p>

    <pre id="29c34f64-d83f-42c0-b065-98fec160c587" class="code">
        <code>npm create svelte@latest</code>
    </pre>

    <p id="93e78da9-3a6d-4261-a1a5-b3c46dd20e2f" class="">
    You’ll be walked through the configuration options for SvelteKit. You can choose any settings you want.</p><p id="3df8d6db-fcd0-44df-a189-0457797f7b91" class="">
    Then we need to install all the necessary SvelteKit packages:</p><pre id="2dc18833-360e-4050-a9a6-fa1bd261f7f1" class="code">
    <code>npm install</code>
    </pre>
    <p id="38121c2c-e6a4-401b-9c0c-128ef1ea84b1" class="">Then we can add all these files to our Git repository:</p>
    <pre id="788f46e2-c964-4bf6-99b5-6c06f42c822d" class="code">
        <code>git add -A &amp;&amp; git commit -m &quot;Initial commit&quot;</code>
    </pre>
    <p id="c5c71222-9dcf-4848-a16f-e4bc1f8114e8" class="">And finally run the development server to test that everything is working:</p>
    <pre id="f9167998-17e5-467a-a883-6e38569894bf" class="code">
        <code>npm run dev -- --open</code>
    </pre>

    <figure id="d493864a-3b47-4a5e-b581-3e72f2b3e074" class="image"><img style="width:528px" src="{assets}/articles/sveltekit-github-pages-guide/sveltekit_skeleton_page.png" alt="Screenshot of SvelteKit's default skeleton page"/></figure>

    <p id="28acdcab-862b-49e8-a362-aa573d9a4ed9" class="">Yay!</p>
    <h2 id="80c176b7-13fe-482d-a0ec-ae33c89e983e" class="">Configure Github Pages</h2>
    <p id="156b17e7-2797-4a0f-8e9d-25a3f1d2c831" class="">Github Pages only allows sites to be hosted from either the root of a repository (<code>/</code>)  or a <code>/docs</code> folder. Sites can also be hosted from any branch of a repository, but again, only in the root or <code>/docs</code> folder.</p>
    <p id="db8ca798-b74c-431a-82e3-001529bda0cf" class="">To keep things simple and clean, we’re going to put our static site in a <code>/docs</code> folder in the <code>main</code> branch.</p>
    <p id="25d1ec3c-d8d1-4bc0-b025-47b9495af03e" class="">In your Github repository settings, navigate to the <code>Pages</code> section. It should look something like this:</p>

    <figure id="b753dfad-8436-4e5f-80a9-f2b0eaf801ac" class="image">
        <img style="width:1137px" src="{assets}/articles/sveltekit-github-pages-guide/github_pages_settings.png" alt="Screenshot of Github Pages' settings"/>
    </figure>

    <p id="4867b6c2-cbc3-45df-99b0-3cc849d8672a" class="">In the “Source” section there’s a dropdown that currently says “None”. Instead of None, choose the <code>main</code> branch and then the <code>/docs</code> folder, as shown below.</p>

    <figure id="b7f4648d-760f-41be-a503-1cb6c3e95d92" class="image">
        <img style="width:396px" src="{assets}/articles/sveltekit-github-pages-guide/github_pages_branch_settings.png" alt="Screenshot of Github Pages' branch and folder settings"/>
    </figure>

    <p id="eb829a65-531b-4d46-b87e-abc4bf765e20" class="">Click “Save” and the page will reload and tell you that your site is ready to be served.</p>
    <h2 id="35ace530-b5da-41e7-8b7f-58ac7f83983e" class="">Configure SvelteKit for Github Pages</h2>
    <p id="d2522f7b-82a8-4137-a2fe-e9350a474499" class="">Now we have to tell SvelteKit that we want our static site to go in the <code>/docs</code> folder.</p>
    <p id="433855e2-ac0b-4335-bc71-76409f771537" class="">First, we need to install the <a href="https://github.com/sveltejs/kit/tree/master/packages/adapter-static">SvelteKit static adapter</a> which will output our app as a static set of files instead of a dynamic app:</p>
    <pre id="5deb8b95-8b8c-44bc-837b-b9848cebc7cc" class="code"><code>npm install @sveltejs/adapter-static@next --save-dev</code></pre>
    <p id="056fe096-d44c-4fbd-87ef-b80503b0aa9f" class="">(You can also run <code>npm uninstall @sveltejs/adapter-auto --save-dev</code> to remove the unnecessary auto adapter from your package if you want.)</p>
    <p id="3dfd944b-2358-41c2-85ce-49a85b94c729" class="">Edit <code>svelte.config.js</code> to use the static adapter as shown below:</p>
    <pre id="84751aaf-8bfb-4976-80b4-1904436c8d13" class="code"><code>{`import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"

const dev = process.env.NODE_ENV === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            // change below to your repo name
            base: dev ? """ : "/your-repo-name",
        },
        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte"
    }
};

export default config;`}</code></pre>
    <p id="94c99b5a-dfee-4e8b-9335-75b7eacd7b31" class="">There are a few things we changed from the default sveltekit config file. We imported <code>adapter-static</code> instead of <code>adapter-auto</code> at the top of the file. We also configured the adapter to use the <code>docs</code> folder as the output target for both our site’s pages as well as static assets like stylesheets, images, and so on.</p>
    <p id="0245312b-2341-41aa-b48e-0e8294ca8106" class="">And finally we also added a <code>paths</code> configuration option which tells SvelteKit the URL path of the SvelteKit site. By default, Github Pages will host your static site at <code>username.github.io/your-repo-name</code>. So we need to configure SvelteKit so that it knows its URLs should fall under <code>/your-repo-name</code> when hosted on Github Pages, but not when testing our site on our own computers (it’s hosted at <code>localhost:3000/</code> during testing with <code>npm run dev</code>).</p>
    <p id="c7f9f442-b4f9-434c-b35d-249c9ba15079" class="">You can run <code>npm run dev</code> again to make sure everything is still working before going to the next step.</p>
    <h3 id="953ba726-7c3a-4a6a-a274-5c023f2ada30" class="">Add a blank .nojekyll file in <code>static</code></h3>
    <p id="cd3114b4-3135-4f17-9c56-a9d89e87df95" class="">To configure Github Pages so that it doesn’t use the Jekyll static site generator (which it does by default), we simply have to create a blank <code>.nojekyll</code> file in the static folder. You can do that any way you like, but here’s how you can do it from the command line:</p>
    <pre id="c5dd1b17-da2a-4dd6-b597-9e6aea1c0d31" class="code"><code>touch static/.nojekyll &amp;&amp; git add static/.nojekyll</code></pre>
    <p id="7cd8d2d3-a4df-4670-bf91-7559cee650df" class="">
    </p>
    <h2 id="aca314d2-d1ac-4212-a31a-45d30eb67457" class="">Deploy your site on Github Pages</h2>
    <p id="50c13dec-6bd6-4b4c-84a1-9a2077324e41" class="">So we have a demo site that runs fine on our computer with <code>npm run dev</code> but we want to deploy it on Github pages. To do that, we use SvelteKit’s <code>build</code> command.</p>
    <pre id="5794896d-c2d8-4ec3-8ee6-e48bf0d329dc" class="code"><code>npm run build</code></pre>
    <p id="16e69038-7fff-4596-bf8b-a84c6131e188" class="">This command will create a <code>docs</code> folder if it doesn’t exist and put all the HTML, CSS, and JavaScript files there. It will also delete and recreate the <code>docs</code> folder every time so make sure not to put any other files in there or they might be deleted.</p>
    <p id="ff347bc0-540c-4add-a338-15891c05f1fc" class="">Don’t forget to add the <code>docs</code> folder to your repository:</p>
    <pre id="14031abf-5230-4fa3-9ef9-e3acd461c0b4" class="code"><code>git add docs</code></pre>
    <p id="4cd2c9a6-6d42-4a86-8f8b-3b826a509037" class="">Now if you commit your changes...</p>
    <pre id="71fc8bbc-14f3-4448-9e23-939994f3a5e5" class="code"><code>git commit -m &quot;add /docs&quot;</code></pre>
    <p id="2a015488-106d-427d-b92a-5b83650d604c" class="">...and push them to Github...</p>
    <pre id="11b05ad5-ee07-41f2-ba63-19f29457082e" class="code"><code>git push origin main</code></pre>
    <p id="40e3a791-f191-4170-8cde-193958327d50" class="">Github will automatically deploy your site! In the Github Pages settings you’ll see this right after you push:</p>

    <figure id="b60bdc1a-65a8-4fe2-b259-9f167c189573" class="image">
        <img style="width:821px" src="{assets}/articles/sveltekit-github-pages-guide/github_pages_site_ready.png" alt="Screenshot of Github Pages' settings with site ready to be published"/>
    </figure>
    <p id="3e29ec3b-09bb-4e3f-97ec-86cffc405016" class="">If you wait a little bit, eventually that page will look like this:</p>

    <figure id="324e7a08-fe62-4257-9b62-fb4cb95e55db" class="image"><img style="width:794px" src="{assets}/articles/sveltekit-github-pages-guide/github_pages_site_published.png" alt="Screenshot of Github Pages' successful publish"/></figure>

    <p id="5bd45d46-037c-4c28-a337-b15882a1395e" class="">Click the link to see your new site running with Github Pages!</p>
    <p id="aa3ab243-fa7e-462b-bd98-977c5b31c220" class="">That is generally the process every time you make a change:</p>
    <ol type="1" id="31bc505d-c587-4ffa-89ce-beb6430c2f9a" class="numbered-list" start="1">
        <li><code>npm run build</code></li>
        <li><code>git add docs &amp;&amp; git commit</code></li>
        <li><code>git push origin main</code></li>
    </ol>
    <h2 id="545577a2-f469-47bb-b33e-233d48a68d71" class="">Custom Domains for Github Pages</h2>
    <p id="352fdcb6-faab-416d-aa23-85ea447d41ff" class="">There is one last thing you need to do <strong>only</strong> if you want to host your SvelteKit site on a custom domain through Github Pages. </p>
    <p id="5b29bb52-ca91-47ea-beb1-007db77c31d6" class="">First, read about how to set up custom domains on the <a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages">Github Pages guide here</a>.</p>
    <p id="0863c72e-a475-442a-b196-e9550fba2af7" class="">The main thing you’ll need in your SvelteKit repository is a <code>CNAME</code> file containing the URL of the site you want:</p>
    <pre id="165ab509-27a2-4574-b10f-39ca60c6dedf" class="code"><code>yourcustomdomain.com</code></pre>
    <p id="3dbc643f-8d0e-408d-8ff8-d0a509e6dd75" class="">Put this <code>CNAME</code> file in the <code>static</code> directory of your SvelteKit project and you’re good to go!</p>

    <h3 id="4fa0fbe3-0293-4b0d-abae-3f4dc391f190" class="">Addendum: Getting HTTP, HTTPS, and WWW working with custom domains on Github</h3>

    <p id="2c381a06-3018-469e-a6c1-8cd53b4c9ab3" class="">This isn’t a SvelteKit-specific thing but it’s a little confusing how to properly configure DNS for Github Pages so that all the following custom domain URLs will work:</p>

    <pre id="1c6756dd-b461-4e81-be9d-66be45d188fb" class="code"><code>example.com
www.example.com
http://example.com
http://www.example.com
https://example.com
https://www.example.com</code></pre>
    <p id="f22f182c-2ff1-47da-8571-1e8842a46c31" class="">To make all those work, it’s pretty simple. Just add “A Records” pointing toward Github’s IP addresses, as well as a “CNAME Record” for www pointed at <code>username.github.io</code>:</p>
    <figure id="b7650a03-f098-4ab7-adbf-e8317567d736" class="image"><img style="width:542px" src="{assets}/articles/sveltekit-github-pages-guide/github_pages_dns_settings.png" alt="Screenshot of DNS settings for Github custom domain"/></figure>
    <p id="3ec5ffaa-8522-477f-9e13-2a108c9878b6" class="">You should also choose “Enforce HTTPS” from the Github Pages settings page. With this setup, every URL from the list above will automatically go to <code>https://example.com</code>.</p>


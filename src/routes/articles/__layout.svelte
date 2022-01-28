<script>
    export const hydrate = false;
    import { base, assets } from '$app/paths';
</script>

<svelte:head>
    <link rel="stylesheet" href="{assets}/mvp.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-FSJW8FC22N"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FSJW8FC22N');
    </script>
    <style>
        body {
            font-family: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        }
        h1 {
            font-size: 3rem;
        }
        article h2 {
            font-size: 2rem;
            margin-top:3rem;
        }
        article h3 {
            font-size: 1.5rem;
            margin-top:3rem;
        }
        p {
            max-width: 700px;
            margin: 1.5rem auto;
            line-height: 2;
        }
        figure img {
            display: block;
            margin: 1rem auto;
            border: 1px solid #eaeaea;
            box-shadow: 0 1px 3px rgba(0,0,0,.07);
        }
        @media (min-width: 768px) {
            p, li {
                font-size:18px;
            }
            pre {
                font-size: 17px;
            }
        }
    </style>
</svelte:head>

<main>
    <nav>
        <h2><a href="{base}/">Svelte SaaS Starter Kit</a></h2>
    </nav>

    <article>
        <slot></slot>
    </article>

    <footer>
        <!-- launch faster with the Svelte SaaS Starter Kit -->
    </footer>
</main>

<style>
    h2 a {
        color: #FF3E00;
    }
    article {
        max-width: 700px;
        margin: 0 auto;
    }
</style>


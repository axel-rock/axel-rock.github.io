<script>
	import { assets } from '$app/paths'
	import CreativeDeveloper from '../components/CreativeDeveloper.svelte'
	import Attaboy from '../components/portfolio/Attaboy.svelte'
	import Contact from '../components/Contact.svelte'
	import Amazon from '../components/portfolio/Amazon.svelte'
	import Thinkeo from '../components/portfolio/Thinkeo.svelte'
</script>

<svelte:head>
	<title>Axel Rock - Creative Developer</title>
	<meta
		name="description"
		content="I'm a creative developer with 10+ years of experience, based in France."
	/>
</svelte:head>

<section
	class="container"
	style="min-height: 70vh; display: flex; flex-direction: column; justify-content: center"
>
	<h1>Axel Rock</h1>
	<CreativeDeveloper />
</section>

<section class="container">
	<p class="center">Front-end developer at Thinkeo.</p>
	<Thinkeo />
</section>

<section class="container">
	<p class="center">Technical advisor for other projects:</p>

	<div class="tiles center">
		<a
			href="https://gwalarn.rock.bzh/"
			class="tile"
			target="_blank"
			style="color: #000 !important; text-decoration: none !important; line-height: 1.1;"
		>
			Gwalarn
		</a>

		<a href="https://www.icono-search.com/" class="tile" target="_blank">
			<img src="{assets}/logo_icono.svg" alt="Icono Logo" style="height: 80%;" />
		</a>

		<a href="https://www.lesfantomes.fr/" class="tile" target="_blank">
			<img src="{assets}/logo_les-fantomes.svg" alt="Les Fantômes Logo" />
		</a>
	</div>
</section>

<section class="container">
	<p class="center">For over a decade, I've created apps, websites and banners.</p>
	<Attaboy />
</section>

<section class="container">
	<p class="center">
		At <a href="https://bannerboy.com" target="_blank" rel="noreferrer">Bannerboy</a>, I had the
		chance to work with the biggest brands.
	</p>

	<div class="tiles center">
		<div class="tile">
			<img src="{assets}/logo_airbnb.svg" alt="Airbnb Logo" />
		</div>

		<div class="tile">
			<img src="{assets}/logo_spotify.png" alt="Spotify Logo" />
		</div>

		<div class="tile">
			<img src="{assets}/logo_google.svg" alt="Google Logo" />
		</div>

		<div class="tile">
			<img src="{assets}/logo_netflix.png" alt="Netflix Logo" />
		</div>
		<!-- 
		<div class="tile">
			<img src="{assets}/logo_converse.svg" alt="Converse Logo" />
		</div> -->
	</div>
</section>

<section class="container" style="width: 100%;">
	<Amazon />
</section>

<section class="container">
	<p class="center">
		JavaScript is my main tool. But I use everything the web offers.<br />Here are my current
		favourite things:
	</p>

	<div class="tiles center">
		<div class="tile">
			<img src="{assets}/logo_svelte.svg" alt="Svelte Logo" />
			<span>SvelteKit</span>
		</div>

		<div class="tile">
			<img src="{assets}/logo_open-ai.svg" alt="OpenAI Logo" />
			<span>AI</span>
		</div>

		<div class="tile">
			<img src="{assets}/logo_firebase.svg" alt="OpenAI Logo" />
			<span>Firebase</span>
		</div>

		<div class="tile">
			<img src="{assets}/logo_browser.svg" alt="Browser Logo" />
			<span>Browser APIs</span>
		</div>
	</div>
</section>

<section class="container full-width">
	<Contact />
</section>

<p class="center">
	<a href="{assets}/axel-rock-creative-developer-resume.pdf" download role="button" class="contrast"
		>Download my resume</a
	>
</p>

<style>
	* {
		--contrast: var(--text);
	}

	h1 {
		font-size: min(6rem, 15vw);
		line-height: 1;
		margin: 0;
		text-align: center;
		font-weight: 400;
	}

	section {
		margin-bottom: var(--spacing-200);
	}

	p {
		margin-bottom: var(--spacing);
		font-size: 1.1em;
		font-weight: 400;
		color: var(--grey-600);
	}

	/* Utility */

	:global(.center) {
		text-align: center;
		place-content: center;
	}

	:global(.mobile-only) {
		display: none;
	}

	:global(.card) {
		display: grid;
		align-items: center;
		justify-content: center;
		padding: calc(var(--spacing) * 4) calc(var(--spacing) * 2);
		gap: calc(var(--spacing) * 1.5);
		border-radius: 2rem;
	}

	:global(.tiles) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(6em, 1fr));
		/* flex-wrap: wrap; */
		justify-content: center;
		font-size: 2rem;
		gap: 0.75em;
	}

	/* @media (max-width: 600px) {
		:global(.tiles) {
			flex-wrap: wrap;
			justify-content: center;
		}
	} */

	:global(.tile) {
		display: grid;
		grid-template-rows: 1em;
		gap: 0.33em;
		padding: 0.5em;
		font-weight: 400;
		line-height: 1;
		justify-content: center;
		text-align: center;
		border: solid 1px #ccc8;
		border-radius: 0.5em;
		color: var(--grey-600);
	}

	:global(.tile img) {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	:global(.tile span) {
		font-size: 0.5em;
	}

	:global(.drop-shadow) {
		filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.2));
	}

	.tiles {
		padding: 0 var(--spacing-200);
	}
</style>

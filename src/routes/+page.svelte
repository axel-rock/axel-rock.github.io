<script>
	import { assets } from '$app/paths';
	import CreativeDeveloper from '../components/CreativeDeveloper.svelte';
	import Attaboy from '../components/portfolio/Attaboy.svelte';
	import Contact from '../components/Contact.svelte';
	import Amazon from '../components/portfolio/Amazon.svelte';
</script>

<section style="min-height: 50vh; justify-content: center">
	<h1>Axel Rock</h1>
	<CreativeDeveloper />
</section>

<section>
	<p class="center">For over a decade, I've created apps, websites and banners.</p>
	<Attaboy />
</section>

<section>
	<p class="center">
		At <a href="https://bannerboy.com" target="_blank" rel="noreferrer">Bannerboy</a>, I had the
		chance to work with the biggest brands.
	</p>

	<div class="tiles">
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

		<!-- <div class="tile">
      <img src="{assets}/logo_converse.svg" alt="Converse Logo">
    </div>  -->
	</div>
</section>

<section style="width: 100%;">
	<Amazon />
</section>

<section>
	<p class="center">
		JavaScript is my main tool. But I use everything the web offers.<br />Here are my current
		favourite things:
	</p>

	<div class="tiles">
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

<section class="full-width">
	<Contact />
</section>

<p class="center">
	<a href="{assets}/axel-rock-creative-developer-resume.pdf" download class="button"
		>Download my resume</a
	>
</p>

<style>
	h1 {
		font-size: min(6rem, 15vw);
		line-height: 1;
		text-align: center;
		font-family: 'SF Pro Display Bold', sans-serif;
	}

	section {
		padding: 1rem;
		max-width: 100ch;
		align-self: center;
	}

	section.full-width {
		width: 100%;
	}
</style>

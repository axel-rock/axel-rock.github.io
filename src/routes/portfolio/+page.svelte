<script>
  import CreativeDeveloper from "../../components/CreativeDeveloper.svelte";
	import Attaboy from "../../components/portfolio/Attaboy.svelte";
	import Contact from "../../components/Contact.svelte";
	import Netflix from "../../components/portfolio/Netflix.svelte";
	import Amazon from "../../components/portfolio/Amazon.svelte";
</script>

<section style="min-height: 50vh; justify-content: center">
  <h1>Axel Rock</h1>
  <CreativeDeveloper />
</section>

<section>
  <p class="center">For over a decade, I've created apps, websites and banners.</p>
  <Attaboy/>
</section>

<section>
  <p class="center">At <a href="https://bannerboy.com" target="_blank" rel="noreferrer">Bannerboy</a>, I had the chance to work with the biggest brands.</p>

  <div class="tiles">
    <div class="tile">
      <img src="logo_airbnb.svg" alt="Airbnb Logo">
    </div>

    <div class="tile">
      <img src="logo_spotify.png" alt="Spotify Logo">
    </div>

    <div class="tile">
      <img src="logo_google.svg" alt="Google Logo">
    </div> 

    <div class="tile">
      <img src="logo_converse.svg" alt="Converse Logo">
    </div> 
  </div>
</section>

<section style="width: 100%;">
  <Amazon/>
  <Netflix/>
</section>

<section>
  <p class="center">JavaScript is my main tool. But I use everything the web offers.<br/>Here are my current favourite things:</p>

  <div class="tiles">
    <div class="tile">
      <img src="logo_svelte.svg" alt="Svelte Logo">
      <span>SvelteKit</span>
    </div>

    <div class="tile">
      <img src="logo_open-ai.svg" alt="OpenAI Logo">
      <span>AI</span>
    </div>

    <div class="tile">
      <img src="logo_firebase.svg" alt="OpenAI Logo">
      <span>Firebase</span>
    </div>

    <div class="tile">
      <img src="logo_browser.svg" alt="Browser Logo">
      <span>Browser APIs</span>
    </div>
  </div>
</section>

<section class="full-width">
  <Contact/>
</section>

<section>
  <small style="opacity: 0.3">
    No cookies have been harmed or stored during your visit on this site.
  </small>
</section>

<style>
  h1 {
    font-size: 6rem;
    line-height: 1;
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
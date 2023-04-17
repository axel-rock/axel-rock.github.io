<script lang="ts">
	import { onMount } from "svelte";

  let iFrame: HTMLIFrameElement;
  function onResize() {
    if (!iFrame) return;
    const { width, height } = iFrame.getBoundingClientRect();
    const parentWidth = iFrame.parentElement?.getBoundingClientRect().width;
    const parentHeight = iFrame.parentElement?.getBoundingClientRect().width;
    if (!parentWidth || !parentHeight) return;
    const scale = Math.min(parentWidth / width, parentHeight / height);
    iFrame.style.transform = `scale(${scale})`;
  }

  onMount(async () => {
    onResize()
  })
</script>

<svelte:window on:resize={() => {
  onResize()
  setTimeout(onResize, 100)
}} />

<article class="card">
  <iframe
    bind:this={iFrame}
    src="https://attaboy-161918.appspot.com.storage.googleapis.com/uploads/-M0Nup4cnnDR6W5sHn5T/files/RTZBOFwZpQr75W9QzXnPARjYJlBIDB/FR_Spenser-Confidential_GENERAL_BANNERBOY_1500x850_H5-ST_MLT_POST_ODP/index.html"
    title="Spenser Confidential animation"
    width="1500"
    height="850"
    frameborder="0"
  ></iframe>

  <div id="cover" class="drop-shadow">
    <h1 class="center">
      <img aria-labelledby="Netflix"  src="logo_netflix.png" alt="Netflix">
    </h1>

    <p class="center">Banner animation / Concept phase</p>

    <p>During our first project with Netflix, for a movie set in Boston, I suggested and prototyped a parody of Google Translate, called <b>Netflix Translate</b>.</p>
    <p>It had the look of Google's famous translation tool, but would convert to the city's slang.</p>
  </div>

</article>

<style>
  article {
    background: #000;
    color: #FFF;
    position: relative;
    aspect-ratio: 1500 / 850;
    margin-bottom: 1rem;
  }

  iframe {
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: top left;
    pointer-events: none;
    align-self: center;
    justify-self: center;
    z-index: 0;
    border-radius: inherit;
  }

  #cover {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 10%;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 75%;
    background: #000;
    /* background: linear-gradient(154deg, rgba(0,0,0,1) 0%, rgba(30,0,0,1) 100%); */
    z-index: 10;
    border-radius: 1rem;
  }

  h1 img {
    height: 4rem;
  }
</style>
<script lang="ts">
	import { assets } from '$app/paths';
	let iframe: HTMLIFrameElement;
</script>

<article class="card">
	<div id="background" />

	<iframe
		bind:this={iframe}
		title="Yeti"
		src="{assets}/portfolio/yeti/index.html"
		width="300"
		height="600"
		loading="lazy"
		frameborder="0"
	/>

	<h1 class="center">
		<img aria-labelledby="Amazon" src="{assets}/logo_amazon.svg" alt="Amazon" />
	</h1>

	<div>
		<p>Multiple campaigns for Amazon: Prime Day, Black Friday, Holiday season…</p>
		<p>
			I've been in charge of master animation, and automation to ship animated and static banners
			for dozens of countries, various sizes and specifications.
		</p>
	</div>
</article>

<style>
	article {
		border-radius: 1rem;
		gap: 0;
		padding: 1rem 3rem 1rem 300px;
		min-height: 300px;
		position: relative;
		display: grid;
		place-content: center;
		gap: 2rem;
	}

	@media (max-width: 600px) {
		article {
			padding: 3rem 1.5rem 350px;
		}

		p {
			margin-bottom: 0.5em;
		}
	}

	p {
		font-weight: 700 !important;
		text-shadow: 0 0 10px #fff4;
	}

	#background {
		background: url('/portfolio/bg_amazon.jpg');
		background-size: cover;
		position: absolute;
		overflow: hidden;
		border-radius: 2rem;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	h1 {
		z-index: 2;
		display: flex;
		justify-content: center;
	}

	h1 img {
		height: 3rem;
	}

	iframe {
		position: absolute;
		left: 0;
		bottom: 0;
		transform-origin: top left;
		pointer-events: none;
		border-bottom-left-radius: 2rem;
		overflow: hidden;
	}
</style>

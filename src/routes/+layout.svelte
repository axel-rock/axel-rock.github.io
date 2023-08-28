<script lang="ts">
	import { dev } from '$app/environment'
	import { inject } from '@vercel/analytics'

	inject({ mode: dev ? 'development' : 'production' })
</script>

<header />

<main>
	<slot />
</main>

<footer />

<style global>
	@import '../css/style.css';
</style>

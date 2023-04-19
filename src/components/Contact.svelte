<script>
	import { assets } from '$app/paths';
</script>

<article class="card">
	<h1 class="center">
		<img
			aria-labelledby="Contact, it's just text, but a reference to Daft Punk"
			src="{assets}/contact.png"
			alt="Contact"
		/>
	</h1>

	<p class="center">I'm based in Nantes and Paris, France</p>

	<div class="tiles">
		<a
			href="http://twitter.com/nineties_panda"
			target="_blank"
			title="Follow me on Twitter"
			rel="noreferrer"
			class="tile"
		>
			<img src="{assets}/logo_twitter.png" alt="Twitter logo" />
			<span>@nineties_panda</span>
		</a>

		<a
			href="http://fr.linkedin.com/in/axelrock"
			target="_blank"
			title="Connect on LinkedIn"
			rel="noreferrer"
			class="tile"
		>
			<img src="{assets}/logo_linkedin.png" alt="LinkedIn logo" />
			<span>Axel Rock</span>
		</a>

		<a
			href="https://github.com/axel-rock"
			target="_blank"
			title="Follow me on GitHub"
			rel="noreferrer"
			class="tile"
		>
			<img src="{assets}/logo_github.svg" alt="GitHub logo" />
			<span>axel-rock</span>
		</a>

		<a
			href="m&#97;il&#116;o&#58;roc&#107;a&#120;%6&#53;&#37;6&#67;&#37;40%67mail&#37;&#50;E%6&#51;&#111;m?subject=Hi%20Axel!&amp;body=Hi%20Axel%20..."
			title="Email me"
			class="tile"
		>
			<img src="{assets}/logo_mail.svg" alt="Mail" style="height: 1.6rem" />
			<span>ro&#99;&#107;&#97;xel&#64;&#103;&#109;ail&#46;c&#111;m</span>
		</a>
	</div>
</article>

<style>
	article {
		background: #000;
		padding: calc(var(--space) * 4) calc(var(--space) * 2) calc(var(--space) * 2);
	}

	a {
		color: #fff;
	}

	h1 {
		display: flex;
		justify-content: center;
	}

	p {
		color: #fff8;
	}

	h1 img {
		height: 6rem;
	}

	.tile img {
		height: 1.75rem;
	}
</style>

<script>
	import Icon from '@iconify/svelte';
</script>

<header>
	<a href="/" class="logo">
		<Icon icon="iconoir:movie" color="#171717" width="32" height="32" />
		<p class="logo_name">SMovie</p>
	</a>
</header>

<style>
	header {
		width: 100%;
		max-width: 1580px;
		margin: 0 auto;
		padding: 16px 22px;
	}

	.logo {
		width: fit-content;
		text-decoration: none;
		display: flex;
		align-items: center;
	}

	.logo_name {
		font-weight: 700;
		font-size: 16px;
		color: #171717;
	}
</style>

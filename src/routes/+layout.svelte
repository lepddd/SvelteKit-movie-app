<script>
	import '../app.css';
	import Header from '../lib/header/Header.svelte';
	import Navbar from '../lib/navbar/Navbar.svelte';
</script>

<div>
	<Navbar />
	<main>
		<slot />
	</main>
</div>

<style>
	div{
		display: flex;
	}
	main{
		flex: 1;
		background: #E7E5E4;
		overflow: hidden;
	}
</style>

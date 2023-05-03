<script>
	import Container from '$lib/card/Container.svelte';
	import Banner from '$lib/banner/Banner.svelte';

	export let data;

	let allMovies = data.movies;
	let loading = false;
	let page = 2;

	const getMovies = async () => {
		loading = true;
		const response = await fetch(`/movies/${page}`);
		const data = await response.json();

		loading = false;
		page++;
		allMovies = [...allMovies, ...data.results];
	};
</script>

{#await allMovies}
	<h2>Searching...</h2>
{:then movies}
	<Banner {movies} />
	<Container {movies} />
	<div class="more">
		<button class="more_btn" on:click={getMovies}>{loading ? 'Loading...' : 'More'}</button>
	</div>
{/await}

<style>
	.more {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}
	.more_btn {
		width: 300px;
		padding: 6px;
		border-radius: 4px;
		border: 1px solid #6366f1;
		background-color: #6366f1;
		font-size: 1rem;
		font-weight: 700;
		letter-spacing: 0.25rem;
		color: #f4f4f4;
		text-align: center;
		cursor: pointer;
	}
</style>

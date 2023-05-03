<script>
	import Card from './Card.svelte';

	export let movies;
</script>

<div class="container">
	{#each movies as movie}
		<Card src={movie.poster_path} id={movie.id} rating={movie.vote_average} />
	{/each}
</div>

<style>
	.container {
		min-width: min-content;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding: 20px;
		gap: 20px;
	}
</style>

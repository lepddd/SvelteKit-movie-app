<script>
	import Rating from './Rating.svelte';

	export let src;
	export let id;
	export let rating
</script>

<a href={`/movie/${id}`} class="card">
	<Rating {rating}/>
	<img class="img" src={`https://image.tmdb.org/t/p/w500/${src}`} alt="movie_img" loading="lazy" />
</a>

<style>
	.card {
		position: relative;
		width: 300px;
		height: 450px;
		border-radius: 4px;
		overflow: hidden;
		cursor: pointer;
	}

	.img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		transition: 0.2s transform cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.card:hover img {
		transform: scale(1.05);
	}
</style>

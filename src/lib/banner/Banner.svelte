<script>
	import Icon from '@iconify/svelte';
	export let movies;

	let movieID;

	function getRandomMovie(length) {
		return Math.floor(Math.random() * length);
	}

	$: movieID = getRandomMovie(movies.length);
</script>

<div class="banner">
	{#if movieID}
		<img
			class="img"
			src="https://image.tmdb.org/t/p/original{movies[movieID].backdrop_path}"
			alt="movie-img"
			loading="lazy"
		/>
		<div class="backdrop">
			<h1 class="movie_title">{movies[movieID].title}</h1>
			<a class="movie_link" href="/movie/{movies[movieID].id}">
				<span class="link_label">Watch trailer</span>
				<Icon
					icon="material-symbols:play-circle-outline-rounded"
					color="#f0f0f0"
					width="24"
					height="24"
				/>
			</a>
		</div>
	{/if}
</div>

<style>
	.banner {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		max-width: 1580px;
		min-width: 340px;
		width: 100%;
		height: 576px;
		margin: 0 auto;
		overflow: hidden;
	}

	.img {
		width: 100%;
		object-position: center 30%;
	}

	.backdrop {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 22px;
		padding: 50px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(10, 10, 10, 0.7);
	}

	.movie_title {
		font-size: 2.25rem;
		font-weight: 700;
		color: #f0f0f0;
	}

	.movie_link {
		width: fit-content;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px 16px;
		gap: 12px;
		background: #6366f1;
		border-radius: 37px;
		text-decoration: none;
	}

	.link_label {
		font-weight: 700;
		color: #f0f0f0;
	}
</style>

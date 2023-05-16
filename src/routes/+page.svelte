<script>
	export let data;

	/* 
	TODO: Fazer a barra de pesquisa	
	TODO: Adicional responsividade
	*/
</script>

<main>
	<h2 class="page_title">Home</h2>

	<div class="search_box">
		<p>Search...</p>
	</div>

	<div class="container">
		<div class="title_box">
			<h4 class="title">Popular</h4>
			<a href="/popular">See more</a>
		</div>

		<div class="box">
			<div class="movie_box">
				{#each data.movies.popular as movie}
					<a href={`/movie/${movie.id}`} class="card">
						<img
							class="poster"
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt=""
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>

	<div class="container">
		<div class="title_box">
			<h4 class="title">Top Rated</h4>
			<a href="/toprated">See more</a>
		</div>

		<div class="box">
			<div class="movie_box">
				{#each data.movies.toprated as movie}
					<a href={`/movie/${movie.id}`} class="card">
						<img
							class="poster"
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt=""
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>

	<div class="container">
		<div class="title_box">
			<h4 class="title">Upcoming</h4>
			<a href="/upcoming">See more</a>
		</div>

		<div class="box">
			<div class="movie_box">
				{#each data.movies.upcoming as movie}
					<a href={`/movie/${movie.id}`} class="card">
						<img
							class="poster"
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt=""
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 20px 30px;
	}
	.page_title {
		padding: 6px 0px;
		color: #78716c;
		font-weight: 500;
		font-size: 20px;
	}
	.search_box {
		background: #f5f5f4;
		padding: 6px 22px;
		border-radius: 100px;
	}
	.search_box > p {
		font-weight: 400;
		font-size: 16px;
		color: #a8a29e;
	}

	.container {
		min-width: 160px;
	}

	.title_box {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
	}

	.title_box > a {
		font-weight: 500;
		font-size: 12px;
		text-decoration: none;
		color: #78716c;
	}

	.title {
		color: #78716c;
		font-weight: 500;
	}
	.box {
		overflow-x: scroll;
	}

	.box::-webkit-scrollbar {
		height: 8px;
	}

	.box::-webkit-scrollbar-track {
		background: #d6d3d1;
	}

	.box::-webkit-scrollbar-thumb {
		background: #a8a29e;
	}

	.box::-webkit-scrollbar-thumb:hover {
		background: #78716c;
	}

	.movie_box {
		width: fit-content;
		display: flex;
		gap: 30px;
		padding: 10px;
	}
	.card {
		width: 140px;
		height: 210px;
		background-color: #a8a29e;
		border-radius: 4px;
		transition: all 0.2s ease-in-out;
		cursor: pointer;
		overflow: hidden;
	}
	.card:hover {
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	}

	.poster {
		width: 100%;
		height: 100%;
		transition: transform 0.2s ease-in-out;
	}

	.card:hover .poster {
		transform: scale(1.02);
	}
</style>

<script>
	import Icon from '@iconify/svelte';

	import { page } from '$app/stores';

	/* TODO: linkar o logo para a página inicial */
</script>

<nav>
	<div class="logo_box">
		<Icon
			icon="material-symbols:camera-roll-outline-rounded"
			color="#737373"
			width="32"
			height="32"
		/>
		<p class="logo">SMovies</p>
	</div>

	<p class="title">Movies</p>
	<ul>
		<li>
			<a href="/" class="list_item" class:active={$page.url.pathname === "/"}>
				<Icon icon="material-symbols:home-work-outline-rounded" width="20" height="20" />
				<p class="route_list">Home</p>
			</a>
		</li>
		<li>
			<a href="/movies/popular" class="list_item" class:active={$page.url.pathname === "/movies/popular"}>
				<Icon icon="mdi:movie-favorite-outline" width="20" height="20" />
				<p class="route_list">Popular</p>
			</a>
		</li>
		<li>
			<a href="/movies/top_rated" class="list_item" class:active={$page.url.pathname === "/movies/top_rated"}>
				<Icon icon="material-symbols:thumb-up-outline-rounded" width="20" height="20" />
				<p class="route_list">Top Rated</p>
			</a>
		</li>
		<li>
			<a href="/movies/upcoming" class="list_item" class:active={$page.url.pathname === "/movies/upcoming"}>
				<Icon icon="material-symbols:event-upcoming-outline-rounded" width="20" height="20" />
				<p class="route_list">Upcoming</p>
			</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		z-index: 99;
		width: fit-content;
		background: #fafafa;
		box-shadow: 4px 0px 6px rgba(0, 0, 0, 0.05);
	}
	.logo_box {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 20px 22px;
	}

	.logo_box > p {
		font-weight: 700;
		font-size: 24px;
		color: #737373;
	}

	.title {
		padding: 10px 22px;
		color: #737373;
		font-weight: 700;
		font-size: 12px;
	}

	.list_item {
		position: relative;
		display: flex;
		align-items: center;
		padding: 8px 22px;
		gap: 10px;
		cursor: pointer;
		color: #a8a29e;
		text-decoration: none;
	}

	.list_item::before {
		display: none;
		position: absolute;
		content: '';
		left: 0;
		width: 5px;
		height: 100%;
		border-radius: 0 12px 12px 0;
		background-color: #22d3ee;
	}
	.list_item.active::before {
		display: block;
	}

	.list_item.active {
		color: #737373;
	}

	.route_list {
		font-weight: 400;
		font-size: 16px;
	}
</style>

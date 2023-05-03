export async function load({ fetch, params }) {
	const key = import.meta.env.VITE_MOVIEDB_KEY;
	const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;

	const response = await fetch(URL);
	const data = await response.json();

	return { movies: data.results };
}
import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	const key = import.meta.env.VITE_MOVIEDB_KEY;
	const URL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}&language=en-US`;

	const response = await fetch(URL);
	const data = await response.json();

	return { movies: data };
}

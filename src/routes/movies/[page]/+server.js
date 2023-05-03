export async function GET({ params }) {
	const key = import.meta.env.VITE_MOVIEDB_KEY;
	const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${params.page}`;

	const response = await fetch(URL);
	const data = await response.json();

	return new Response(JSON.stringify(data));
}

export async function load({ fetch }) {
	const popular = fetch('/movies/popular/1').then((res) => res.json());

	const toprated = fetch('/movies/top_rated/1').then((res) => res.json());

	const upcoming = fetch('/movies/upcoming/1').then((res) => res.json());

	const data = await Promise.all([popular, toprated, upcoming]).then((data) => data);

	return {
		movies: { popular: data[0].results, toprated: data[1].results, upcoming: data[2].results }
	};
}

import axios from 'axios';
import Head from 'next/head';
import Layout from '../../components/layout/layout';

const Genre = ({ data }) => {
	return (
		<div style={{ padding: '1rem 2rem' }}>
			<Head>
				<title>Hulu</title>
				<meta name='description' content='Hulu Clone' />
			</Head>

			<Layout data={data} />
		</div>
	);
};

export async function getStaticPaths() {
	const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API}&language=en-US`);
	const routes = [];

	data?.genres?.map((genre) => {
		routes.push({ params: { id: genre.name.toLowerCase() } });
	});
	console.log(routes);
	return {
		paths: routes,
		fallback: true, // See the "fallback" section below
	};
}

export async function getStaticProps({ params }) {
	const genres = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API}&language=en-US`);

	const currentGenre = genres.data.genres.filter((genre) => genre.name.toLowerCase() === params.id);

	const movies = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API}&with_genres=${currentGenre[0].id}`);

	const data = {
		genres: genres.data.genres,
		movies: movies.data.results,
	};

	return {
		props: {
			data,
		},
	};
}

export default Genre;

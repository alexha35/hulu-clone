import axios from 'axios';
import Head from 'next/head';
import Layout from '../components/layout/layout';

export default function Home({ data }) {
	return (
		<div style={{ padding: '1rem 2rem' }}>
			<Head>
				<title>Hulu</title>
				<meta name='description' content='Hulu Clone' />
				
			</Head>

			<Layout data={data} />
		</div>
	);
}

export async function getStaticProps({ params }) {
	const genres = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API}&language=en-US`);
	const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API}&language=en-US`);

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

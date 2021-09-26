import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	transition: 0.2s ease-in all;
	cursor: pointer;
	width: 250px;

	&:hover {
		transform: scale(1.1);
	}
`;
const Title = styled.h3`
	color: white;
	margin: 10px 0px;
	max-width: 380px;
`;

const Info = styled.p`
	color: white;
`;

const Card = ({ movie }) => {
	return (
		<Container>
			<Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} height={300} width={250} layout='fixed' />
			<Title>{movie.original_title}</Title>
			<Info>
				Release Date: {movie.release_date} · Popularity: {movie.popularity}
			</Info>
		</Container>
	);
};

export default Card;

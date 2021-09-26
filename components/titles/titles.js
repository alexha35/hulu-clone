import styled from 'styled-components';
import Card from '../card/card';

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-gap: 2rem;
	justify-items: center;
	padding-bottom: 2rem;
`;

const Titles = ({ movies }) => {
	return (
		<Container>
			{movies?.map((movie) => {
				return <Card key={movie.id} movie={movie} />;
			})}
		</Container>
	);
};

export default Titles;

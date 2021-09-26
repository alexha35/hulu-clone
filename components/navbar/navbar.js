import styled from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	overflow-x: scroll;
	scrollbar-width: none;
	position: relative;
	margin: 4rem 0rem;

	&::-webkit-scrollbar {
		display: none;
	}

	div {
		position: fixed;
		top: 65px;
		right: 0;
		height: 55px;
		width: 160px;
		z-index: 2;
		background: rgb(255, 255, 255);
		background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(21, 48, 62, 1) 60%);
		display: none;
	}
`;

const Item = styled.li`
	font-size: 20px;
	color: #f7f7f7;
	list-style: none;
	padding: 0rem 2rem;
	cursor: pointer;
	transition: 0.1s ease-in all;
	white-space: nowrap;

	&:hover {
		font-size: 24px;
	}

	&:first-child {
		padding-left: 0rem;
	}

	&:last-of-type {
		margin-right: 70px;
	}
`;

const Navbar = ({ genres }) => {
	const router = useRouter();

	const handleRoute = (e) => {
		router.push(`/genre/${e.target.innerText.toLowerCase()}`);
	};

	return (
		<Container>
			{genres?.map((genre) => (
				<Item
					key={genre.id}
					onClick={(e) => {
						handleRoute(e);
					}}
				>
					{genre.name}
				</Item>
			))}

			<div />
		</Container>
	);
};

export default Navbar;

import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
	width: 30px;
	height: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	margin-right: 1.5rem;

	div {
		height: 20px;
		width: 20px;
		transition: 0.3s ease-in all;
	}

	p {
		color: white;
		font-size: 12px;
		transition: 0.3s ease-in all;
		opacity: 0;
	}

	&:hover {
		div {
			height: 30px;
			width: 30px;
		}

		p {
			opacity: 1;
		}
	}
`;

const IconNavigation = ({ icon, title, href }) => {
	return (
		<Link href={href}>
			<Container>
				<div>{icon}</div>
				<p>{title}</p>
			</Container>
		</Link>
	);
};

export default IconNavigation;

import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Titles from '../titles/titles';

const Layout = ({ data }) => {
	return (
		<>
			<Header />
			<Navbar genres={data?.genres} />
			<Titles movies={data?.movies} />
		</>
	);
};

export default Layout;

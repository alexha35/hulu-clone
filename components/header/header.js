import styled from 'styled-components';
import Image from 'next/image';
import IconNavigation from '../icon-navigation/icon-navigation';
import { AiOutlineHome, AiOutlineCheckSquare, AiOutlineInbox, AiOutlineSearch } from 'react-icons/ai';
import { BsLightning } from 'react-icons/bs';

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ImageContainer = styled.div`
	object-fit: contain;
`;

const IconNavContainer = styled.div`
	display: flex;
	width: 250px;
	justify-content: flex-start;
`;

const iconStyle = { height: '100%', width: '100%', color: 'white' };

const Header = () => {
	return (
		<HeaderContainer>
			<IconNavContainer>
				<IconNavigation icon={<AiOutlineHome style={iconStyle} />} title={'HOME'} href={'/'} />
				<IconNavigation icon={<BsLightning style={iconStyle} />} title={'HOT'} href={'#'} />
				<IconNavigation icon={<AiOutlineCheckSquare style={iconStyle} />} title={'SAVED'} href={'#'} />
				<IconNavigation icon={<AiOutlineInbox style={iconStyle} />} title={'SELECTION'} href={'#'} />
				<IconNavigation icon={<AiOutlineSearch style={iconStyle} />} title={'SEARCH'} href={'#'} />
			</IconNavContainer>
			<ImageContainer>
				<Image src={'/green-logo/hulu-Green-digital.png'} alt='HULU Logo' height={35} width={100} />
			</ImageContainer>
		</HeaderContainer>
	);
};

export default Header;

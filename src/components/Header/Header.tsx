import { useDispatch, useSelector } from 'react-redux';
import Switch from '@mui/material/Switch';
import {toggleThemeAction} from '../../feature/themeList';
import { Link } from 'react-router-dom';
import {
	HeaderBlock,
	HeaderContainer,
	HeaderLogo,
	HeaderLink,
	HeaderNav,
	HeaderProfile,
} from './Header.styled';
import logoLight from '../../assets/images/logo.png';
import logoDark from '../../assets/images/logo-dark.png';
import { Profile } from './Profile/Profile';
export const Header = () => {
	const dispatch = useDispatch();
	const themeName = useSelector((state: any) => state.themeList.theme.name);
	const logo = themeName === 'dark' ? logoDark : logoLight;
	return (
		<>
			<HeaderBlock>
				<HeaderContainer>
					<Link
						to="https://denuo.legal"
						target="_blank"
						rel="noopener noreferrer"
					>
						<HeaderLogo src={logo} />
					</Link>

					<HeaderNav>
						<HeaderLink to="/">Home</HeaderLink>
						<HeaderLink to="/hr">HR</HeaderLink>
						<HeaderLink to="/marketing">Marketing</HeaderLink>
						<HeaderLink to="/it">IT</HeaderLink>
						<HeaderLink to="/people">People</HeaderLink>
					</HeaderNav>
          <HeaderProfile >
            <Profile />
          </HeaderProfile>
          <Switch checked={themeName === 'dark'}  onClick={()=> dispatch(toggleThemeAction())} />
				</HeaderContainer>
			</HeaderBlock>
		</>
	);
};

import {Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {LayoutBlock, Main} from './Layout.styled';
import {Header} from '../components/Header/Header';
import {GlobalStyle} from '../styles/GlobalStyle';
import {RootState} from '../Store/store';

export const Layout = () => {

	const theme = useSelector((state: RootState) => state.themeList.theme);
	
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle theme={theme} />
			<LayoutBlock>
				<Header />
				<Main>
					<Outlet />
				</Main>
			</LayoutBlock>
		</ThemeProvider>
	);
};

import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import '../../Layout/Layout.styled';
import {Theme} from '../../models/theme';

export const HeaderBlock = styled.div`
	grid-area: header;
	position: fixed;
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: #fff;
	z-index: 99;
`;
export const HeaderContainer = styled.div<{ theme: Theme }>`
	width: 140rem;
	border-bottom: 1px solid ${({theme}) => theme.colors.borderColor};
	display: flex;
	gap: 3.2rem;
	align-items: center;
	padding: 1.6rem 0;
`;
export const HeaderLogo = styled.img`
	width: 15rem;
	object-fit: contain;
    
`;
export const HeaderNav = styled.div`
	display: flex;
	flex: 1;
	gap: 1.6rem;
`;
export const HeaderLink = styled(NavLink)<{theme: Theme}>`
	position: relative;
	text-decoration: none;
	padding: 1rem;
	color: ${({ theme }) => theme.colors.headerText};
    width: 10rem;
    text-align: center;
    border: none;
	font-size: var(--text-size-normal);
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 10rem;
        height: 4.5rem;
        background-color:  ${({ theme }) => theme.colors.activeColor};
        transform: skew(-15deg);
        z-index: -1;
        opacity: 0;
        transition: opacity 0.5s ease;
    }
	&:hover {
		color: ${({ theme }) => theme.colors.accentColor};
        &::before {
			opacity: 1;
		}
		
	}

	&.active {
		color: ${({theme}) => theme.colors.accentColor};
		
	 &::before {
			opacity: 1;
		}
    
	}
`;
export const ProfileHeader = styled.div``;

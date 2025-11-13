import styled from 'styled-components';
import {Theme} from '../../../models/theme';

export const ProfileWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;
`;
export const ProfileImageBox = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
	width: 5rem;
	height: 5rem;
	overflow: hidden;
`;
export const ProfileImage = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	
`;
export const ProfileText = styled.div<{ theme: Theme }>`
	font-size: var(--text-size-normal);
	color: ${({theme}) => theme.colors.headerText};
`;

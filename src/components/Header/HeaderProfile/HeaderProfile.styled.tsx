import styled from 'styled-components';
import {Theme} from '../../../models/theme';

export const ProfileWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	cursor: pointer;
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
	color: ${({ theme }) => theme.colors.headerText};
	
`;

export const TitleBox = styled.div<{theme: Theme}>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	border-bottom: 1px solid ${({theme}) => theme.colors.borderColor};
	padding-bottom: 10px;
	color: ${({theme}) => theme.colors.textColor};
`;
export const Text = styled.div<{theme: Theme}>`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	color: ${({theme}) => theme.colors.textColor};
`;
export const TextItem = styled.div<{theme: Theme}>`
	display: flex;
	justify-content: space-between;
	gap: 15px;
`;
export const TitleImage = styled.div<{theme: Theme}>`
width: 100px;
	height: 120px;
	border: 1px solid ${({theme}) => theme.colors.borderColor};
	img {
		width: 100px;
		height: 120px;
	}
`
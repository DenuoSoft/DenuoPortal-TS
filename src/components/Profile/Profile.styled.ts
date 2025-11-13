import styled from 'styled-components';
import {Theme} from '../../models/theme';

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

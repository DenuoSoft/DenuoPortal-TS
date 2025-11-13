import styled from 'styled-components';
import {Theme} from '../../models/theme';

export const NewsWrapper = styled.div`
	display: flex;
	max-width: 140rem;
`;
export const NewsBox = styled.div`
	display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 16px;
    width: 100%;
    
`;
export const NewsItems = styled.div<{theme: Theme}>`
	position: relative;
 	z-index: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 2rem;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
     box-shadow: var(--box-shadow);
	color: ${({theme}) => theme.colors.textColor};
	
	cursor: pointer;
	border-radius: 2.5rem;
	&:hover {
		background-color:${({ theme }) => theme.colors.primaryColor};
       
		transition: background-color 0.8s ease;
	}
	
`;
export const ImageBox = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	overflow: hidden;
	img {
		width: 75%;
		height: 150px;
		object-fit: cover;
		overflow: hidden;
	}
`;
export const InfoBox = styled.div`
	margin-top: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const Text = styled.div<{theme: Theme}>`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	gap: 5px;
	color: ${({theme}) => theme.colors.headerText};
	font-size: var(--text-size-14px);
`;
export const Title = styled.h2`
	margin: 0;
	margin-bottom: 5px;
	font-size:var(--text-size-14px);
	font-weight: bold;
`;
export const Content = styled.div<{theme: Theme}>`
	margin-top: 10px;
	font-size: var(--text-size-12px);
	color: ${({theme}) => theme.colors.headerText};
	text-align: justify;
`;

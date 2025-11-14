import styled from 'styled-components';
import {Theme} from '../../models/theme';

export const SliderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 100rem;
	margin: 0 auto;
	
`;
export const SliderBox = styled.div<{$isPaused: boolean}>`
	position: relative;
	width: 100%;
	height: 30rem;
    box-shadow: var(--box-shadow);
	border-radius: 3rem;
	overflow: hidden;
	transition: opacity 1s ease;
	${(props) =>
		props.$isPaused &&
		`
    opacity: 0.8;
  `}
`;

export const Slide = styled.div<{$isActive: boolean}>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	opacity: 0;
	transition: opacity 1s ease;

	${(props) =>
		props.$isActive &&
		`
    opacity: 0.9;
		z-index: 2;
  `}
`;

export const SlideContent = styled.div<{ $backgroundImage: string;  theme: Theme}>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	//background-image: ${(props) => `url(${props.$backgroundImage})`};
	background-size: contain;
	overflow: hidden;
	background-position: center;
	width: 100%;
	height: 100%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #fff;
	text-align: center;
	background-color: transparent;
	
	border-radius: 3rem;
	overflow: hidden;
	z-index: 3;
	transition: background-color 1s ease;
	h2 {
		margin: 0;
		font-size: 1.8rem;
		font-weight: 500;
	}
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: inherit;
		background-size: cover;
		background-position: center;
		opacity: 0.7;
		z-index: -1;
	}
`;

export const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 2.4rem;
	background-color: rgba(0, 0, 0, 0.25);
	border-radius: 3rem;
	overflow: hidden;
	height: 100%;
`;

export const Text = styled.div`
	h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	p {
		margin-top: 10px;
		font-size: 15px;
		color: #fff;
	}
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: center;
	z-index: 3;
`;

export const NavButton = styled.button<{$isPrev: boolean; $isNext: boolean, theme: Theme}>`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background-color: ${({theme}) => theme.colors.backgroundSecondary};
	color: ${({theme}) => theme.colors.activeColor};
	border: 1px solid rgba(98, 121, 167, 0.3);
	cursor: pointer;
	padding: 8px 12px;
	border-radius: 50%;
	font-size: 1.2rem;
	line-height: 1;
	transition: background-color 0.3s;
	z-index: 3;

	&:hover {
		background: #fff;
		 
	}

	${(props) =>
		props.$isPrev &&
		`
    left: 1rem;
  `}

	${(props) =>
		props.$isNext &&
		`
    right: 1rem;
  `}
`;

export const DotsContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
	gap: 0.5rem;
`;
export const Button = styled.button<{theme: Theme}>`
	display: flex;
	align-items: center;
	padding: 1rem 1.5rem;
	text-transform: uppercase;
	font-size: var(--text-size-14px);
	background-color: ${({theme}) => theme.colors.primaryColor};
	color: ${({theme}) => theme.colors.headerText};
	border: none;
	line-height: 1;
	cursor: pointer;
`;
export const Dot = styled.span<{$isActive: boolean; theme: Theme}>`
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 50%;
	background-color: ${({theme, $isActive}) =>
		$isActive ? theme.colors.primaryColor : theme.colors.textColor};
	margin: 0 6px;
	cursor: pointer;
	transition: background 0.3s;

	&:hover {
		background: #999;
	}
`;

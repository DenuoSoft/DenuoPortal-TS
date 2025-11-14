import styled from 'styled-components';
import {Theme} from '../../models/theme';

export const SearchWrap = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 5rem;
`;
export const MainWrap = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 1rem;
`;
export const AlphabetBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem 1.6rem;
	align-items: center;
	justify-content: space-between;
	box-shadow: var(--box-shadow);
`;
export const AlphabetHeader = styled.div<{$isActive?: boolean; theme: Theme}>`
	position: relative;
	cursor: pointer;
	font-size: var(--text-size-12px);
	color: ${({$isActive, theme}) =>
		$isActive ? theme.colors.accentColor : theme.colors.textColor};
	&::before {
		content: '';
		position: absolute;
		top: -4px;
		left: -7px;
		width: 3rem;
		height: 2.5rem;
		background-color: ${({$isActive, theme}) =>
			$isActive ? theme.colors.activeColor : '#fff'};
		transform: skew(-15deg);
		z-index: -1;
		opacity: ${(props) => (props.$isActive ? 1 : 0)};
	}
	&:hover {
		font-weight: bold;
		color: ${({theme}) => theme.colors.accentColor};
		&::before {
			content: '';
			position: absolute;
			top: -4px;
			left: -7px;
			width: 3rem;
			height: 2.5rem;
			background-color: ${({theme}) => theme.colors.activeColor};
			transform: skew(-15deg);
			z-index: -1;
			opacity: 1;
		}
	}
`;
export const AlphabetList = styled.span<{$isActive?: boolean; theme: Theme}>`
	position: relative;
	cursor: pointer;
	font-size: var(--text-size-12px);
	color: ${({$isActive, theme}) =>
		$isActive ? theme.colors.accentColor : theme.colors.textColor};
	&::before {
		content: '';
		position: absolute;
		top: -4px;
		left: -7px;
		width: 2.5rem;
		height: 2.5rem;
		background-color: ${({$isActive, theme}) =>
			$isActive ? theme.colors.activeColor : '#fff'};
		transform: skew(-15deg);
		z-index: -1;
		opacity: ${(props) => (props.$isActive ? 1 : 0)};
	}
	&:hover {
		font-weight: bold;
		color: ${({theme}) => theme.colors.accentColor};
		&::before {
			content: '';
			position: absolute;
			top: -4px;
			left: -7px;
			width: 2.5rem;
			height: 2.5rem;
			background-color: ${({theme}) => theme.colors.activeColor};
			transform: skew(-15deg);
			z-index: -1;
			opacity: 1;
		}
	}
`;

export const TableContainer = styled.div`
	box-shadow: var(--box-shadow);
	flex: 1;
`;

export const TableHeader = styled.div<{theme: Theme}>`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	position: sticky;
	top: 0;
	background-color: ${({theme}) => theme.colors.backgroundSecondary};
	z-index: 1;
	font-size: var(--text-size-14px);
	font-weight: bold;
`;

export const TableBody = styled.div`
	display: block;
`;

export const TableRow = styled.div<{theme: Theme}>`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	&:nth-child(even) {
		background-color: ${({theme}) => theme.colors.backgroundSecondary};
	}
`;

export const TableCell = styled.div<{theme: Theme}>`
	padding: 1.2rem 1.6rem;
	word-break: break-word;
	font-size: var(--text-size-12px);
	color: ${({theme}) => theme.colors.headerText};
`;
export const NotFound = styled.div<{theme: Theme}>`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.2rem 1.6rem;
	font-size: var(--text-size-12px);
	font-weight: bold;
	color: red;
`;

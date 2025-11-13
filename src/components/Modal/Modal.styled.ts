import styled, {css} from 'styled-components';
import {ModalStyledProps} from '../../models/modal';

export const ModalOverlay = styled.div.attrs<ModalStyledProps>(() => ({
	role: 'presentation',
}))<ModalStyledProps>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(98, 121, 167);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	padding: 20px;
	opacity: 0;
	transition: background-color 0.8s ease, opacity 0.8s ease;
	pointer-events: none;

	${(props) =>
		props.$isVisible &&
		css`
			background-color: rgba(98, 121, 167, 0.6);
			opacity: 1;
			pointer-events: auto;
		`}
`;

export const ModalContent = styled.div.attrs<ModalStyledProps>(() => ({
	role: 'dialog',
	'aria-modal': 'true',
}))<ModalStyledProps>`
	background: white;
	border-radius: 25px;
	max-width: 800px;
	width: fit-content;
	min-width: 500px;
	max-height: 90vh;
	transform: scale(0.9) translateY(-20px);
	opacity: 0;
	transition: transform 0.8s ease, opacity 0.8s ease;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	${(props) =>
		props.$isVisible &&
		css`
			transform: scale(1) translateY(0);
			opacity: 1;
		`}
`;

export const ModalHeader = styled.div`
	padding: 10px 10px 0 10px;
	flex-shrink: 0;
	display: flex;
	justify-content: flex-end;
`;

export const CloseButton = styled.button.attrs({
  'aria-label': 'Close modal'
})`
	background: none;
	border: none;
	font-size: 28px;
	cursor: pointer;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	color: #666;
	transition: background-color 0.8s ease;

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
		color: #333;
	}
`;

export const ModalBody = styled.div`
	padding: 0 20px 20px 20px;
	flex: 1;
	overflow-y: auto;
	max-height: calc(90vh - 60px);
    font-size: var(--text-size-normal);
	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 4px;
		margin: 4px 0;
	}

	&::-webkit-scrollbar-thumb {
		background: #c1c1c1;
		border-radius: 4px;

		&:hover {
			background: #a8a8a8;
		}
	}

	scrollbar-width: thin;
	scrollbar-color: #c1c1c1 #f1f1f1;
`;

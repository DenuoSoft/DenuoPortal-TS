import {ReactNode} from 'react';
export interface ModalProps {
	isVisible: boolean;
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	
}
export interface ModalStyledProps {
  $isVisible: boolean;
}
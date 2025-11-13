import React, {useEffect, useRef, useState, useCallback} from 'react';
import { ModalProps } from '../../models/modal';
import { CloseButton, ModalBody, ModalContent, ModalHeader, ModalOverlay } from './Modal.styled';


export const Modal = ({isOpen, onClose, children,}: ModalProps) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [shouldRender, setShouldRender] = useState(isOpen);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handleClickOutside = useCallback(
		(event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				onClose();
			}
		},
		[onClose]
	);
	
	const handleEscapeKey = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose();
			}
		},
		[onClose]
	);

	const cleanup = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		document.removeEventListener('mousedown', handleClickOutside);
		document.removeEventListener('keydown', handleEscapeKey);
		document.body.style.overflow = 'unset';
	}, [handleClickOutside, handleEscapeKey]);

	useEffect(() => {
		if (isOpen) {
			setShouldRender(true);
			timeoutRef.current = setTimeout(() => {
				setIsVisible(true);
			}, 10);

			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('keydown', handleEscapeKey);
			document.body.style.overflow = 'hidden';

			return cleanup;
		} else {
			setIsVisible(false);
			timeoutRef.current = setTimeout(() => {
				setShouldRender(false);
			}, 300);

			return () => {
				if (timeoutRef.current) {
					clearTimeout(timeoutRef.current);
				}
			};
		}
	}, [isOpen, onClose, handleClickOutside, handleEscapeKey, cleanup]);

	if (!shouldRender) return null;

	return (
		<ModalOverlay
			$isVisible={isVisible}
			onClick={
				handleClickOutside as unknown as React.MouseEventHandler<HTMLDivElement>
			}
		>
			<ModalContent 
				$isVisible={isVisible}
				ref={modalRef}
				role="dialog"
				aria-modal="true"
			>
				<ModalHeader>
					<CloseButton
						onClick={onClose}
						aria-label="Close modal"
					>
						&times;
					</CloseButton>
				</ModalHeader>
				<ModalBody>{children}</ModalBody>
			</ModalContent>
		</ModalOverlay>
	);
};

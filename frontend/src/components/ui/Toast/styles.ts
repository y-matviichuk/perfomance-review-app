import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const ToastContainer = styled.div`
	position: fixed;
	top: 1.25rem;
	right: 1.25rem;
	z-index: 9999;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	max-width: 25rem;
	pointer-events: none;
`;

interface ToastItemProps {
	$type: 'success' | 'error' | 'warning' | 'info';
}

const getToastColor = (type: string) => {
	switch (type) {
		case 'success':
			return '#10b981';
		case 'error':
			return '#ef4444';
		case 'warning':
			return '#f59e0b';
		case 'info':
			return '#3b82f6';
		default:
			return '#3b82f6';
	}
};

export const ToastItem = styled.div<ToastItemProps>`
	background: ${({ $type }) => getToastColor($type)};
	color: white;
	padding: 1rem 1.25rem;
	border-radius: 0.5rem;
	box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	pointer-events: auto;
	animation: ${slideIn} 0.3s ease-out;
	min-width: 18.75rem;
`;

export const ToastMessage = styled.p`
	margin: 0;
	font-size: 0.875rem;
	line-height: 1.4;
`;

export const CloseButton = styled.button`
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	padding: 0;
	font-size: 1.5rem;
	line-height: 1;
	opacity: 0.8;
	transition: opacity 0.2s;

	&:hover {
		opacity: 1;
	}
`;

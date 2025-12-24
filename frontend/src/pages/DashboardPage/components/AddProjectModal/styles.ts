import * as Dialog from '@radix-ui/react-dialog';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`;

const slideIn = keyframes`
	from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); }
	to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`;

export const StyledOverlay = styled(Dialog.Overlay)`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	animation: ${fadeIn} 250ms ease-out;
`;

export const StyledContent = styled(Dialog.Content)`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90vw;
	max-width: 500px;
	max-height: 85vh;
	overflow-y: auto;
	padding: 2rem;
	background-color: white;
	border-radius: 0.5rem;
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
	animation: ${slideIn} 250ms ease-out;

	&:focus {
		outline: none;
	}
`;

export const StyledTitle = styled(Dialog.Title)`
	margin: 0 0 1.5rem;
	font-size: 1.5rem;
	font-weight: 600;
	color: #1a1a1a;
`;

export const StyledClose = styled(Dialog.Close)`
	position: absolute;
	top: 1rem;
	right: 1rem;
	width: 2rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background: none;
	font-size: 1.5rem;
	color: #666;
	cursor: pointer;
	border-radius: 50%;
	transition: background-color 0.2s;

	&:hover {
		background-color: #f0f0f0;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
`;

export const ErrorMessage = styled.div`
	color: #ef4444;
	font-size: 0.875rem;
	padding: 0.75rem;
	background-color: #fee2e2;
	border: 1px solid #fecaca;
	border-radius: 0.375rem;
`;

import styled from 'styled-components';
import type { ButtonProps, ButtonVariant } from './types';

const getVariantStyles = (variant: ButtonVariant) => {
	switch (variant) {
		case 'danger':
			return {
				background: '#e74c3c',
				hover: '#c0392b',
			};
		case 'primary':
			return {
				background: '#007bff',
				hover: '#0056b3',
			};
	}
};

export const StyledButton = styled.button<ButtonProps>`
	background-color: ${({ variant }) => getVariantStyles(variant).background};
	color: white;
	border: none;
	padding: 0.75rem 1.25rem;
	border-radius: 0.375rem;
	font-size: 1rem;	
	font-weight: 600;
	cursor: pointer;
	width: 100%;
	white-space: nowrap;
	transition: background-color 0.2s;

	&:hover {
		background-color: ${({ variant }) => getVariantStyles(variant).hover};
	}

	&:active {
		transform: translateY(0.0625rem);
	}

	&:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
`;

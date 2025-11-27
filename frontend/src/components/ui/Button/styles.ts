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
	padding: 12px 20px;
	border-radius: 6px;
	font-size: 16px;	
	font-weight: 600;
	cursor: pointer;
	width: 100%;
	transition: background-color 0.2s;

	&:hover {
		background-color: ${({ variant }) => getVariantStyles(variant).hover};
	}

	&:active {
		transform: translateY(1px);
	}

	&:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
`;

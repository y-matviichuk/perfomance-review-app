import styled from 'styled-components';

interface StyledInputProps {
	$hasError?: boolean;
}

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
`;

export const Label = styled.label`
	font-size: 0.875rem;
	font-weight: 500;
	color: #333;
`;

export const StyledInput = styled.input<StyledInputProps>`
	width: 100%;
	padding: 0.75rem 1rem;
	font-size: 1rem;
	border: 0.125rem solid ${({ $hasError }) => ($hasError ? '#e74c3c' : '#ddd')};
	border-radius: 0.375rem;
	background-color: #fff;
	transition: all 0.2s;

	&:focus {
		outline: none;
		border-color: ${({ $hasError }) => ($hasError ? '#e74c3c' : '#007bff')};
		box-shadow: 0 0 0 0.1875rem
			${({ $hasError }) =>
				$hasError ? 'rgba(231, 76, 60, 0.1)' : 'rgba(0, 123, 255, 0.1)'};
	}

	&::placeholder {
		color: #999;
	}

	&:disabled {
		background-color: #f5f5f5;
		cursor: not-allowed;
	}
`;

export const ErrorMessage = styled.span`
	font-size: 0.8125rem;
	color: #e74c3c;
	font-weight: 500;
`;

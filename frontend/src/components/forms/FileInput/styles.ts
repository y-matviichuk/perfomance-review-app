import styled from 'styled-components';

interface DropZoneProps {
	$hasError?: boolean;
	$isDragActive?: boolean;
}

export const FileInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const Label = styled.label`
	font-size: 0.875rem;
	font-weight: 500;
	color: #333;
`;

export const DropZone = styled.div<DropZoneProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 150px;
	padding: 2rem;
	border: 2px dashed
		${({ $hasError, $isDragActive }) =>
			$hasError ? '#e74c3c' : $isDragActive ? '#007bff' : '#ddd'};
	border-radius: 0.5rem;
	background-color: ${({ $isDragActive }) =>
		$isDragActive ? 'rgba(0, 123, 255, 0.05)' : '#fafafa'};
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		border-color: #007bff;
	}
`;

export const Preview = styled.img`
	max-width: 100%;
	max-height: 200px;
	border-radius: 0.25rem;
`;

export const ErrorMessage = styled.span`
	font-size: 0.8125rem;
	color: #e74c3c;
`;

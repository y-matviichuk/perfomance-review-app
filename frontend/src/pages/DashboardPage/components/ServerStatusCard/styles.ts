import styled from 'styled-components';

export const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: 700;
	color: #333;
	margin: 0 0 1rem 0;
`;

export const StatusRow = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	margin-bottom: 1rem;
`;

export const StatusLabel = styled.span`
	font-size: 1rem;
	font-weight: 600;
	color: #666;
`;

export const ButtonGroup = styled.div`
	display: flex;
	gap: 0.75rem;
	max-width: 25rem;
`;

export const InfoText = styled.p`
	color: #666;
	line-height: 1.6;
	margin: 0 0 1rem 0;
`;

export const CodeBlock = styled.pre`
	background: #f5f5f5;
	padding: 0.75rem;
	border-radius: 0.25rem;
	overflow-x: auto;
	font-size: 0.875rem;
	color: #333;
`;

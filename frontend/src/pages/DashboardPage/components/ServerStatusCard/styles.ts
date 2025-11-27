import styled from 'styled-components';

export const Card = styled.div`
	background: white;
	border-radius: 8px;
	padding: 24px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	margin-bottom: 24px;
`;

export const Title = styled.h2`
	font-size: 24px;
	font-weight: 700;
	color: #333;
	margin: 0 0 16px 0;
`;

export const StatusRow = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	margin-bottom: 16px;
`;

export const StatusLabel = styled.span`
	font-size: 16px;
	font-weight: 600;
	color: #666;
`;

export const ButtonGroup = styled.div`
	display: flex;
	gap: 12px;
	max-width: 400px;
`;

export const InfoText = styled.p`
	color: #666;
	line-height: 1.6;
	margin: 0 0 16px 0;
`;

export const CodeBlock = styled.pre`
	background: #f5f5f5;
	padding: 12px;
	border-radius: 4px;
	overflow-x: auto;
	font-size: 14px;
	color: #333;
`;

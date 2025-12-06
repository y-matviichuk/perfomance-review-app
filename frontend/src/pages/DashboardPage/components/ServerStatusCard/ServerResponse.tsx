import type { FC } from 'react';
import type { ServerResponse as ServerResponseType } from '@/types/api';
import { CodeBlock, InfoText } from './styles';

interface ServerResponseProps {
	isLoading: boolean;
	isError: boolean;
	data?: ServerResponseType;
}

export const ServerResponse: FC<ServerResponseProps> = ({
	isLoading,
	isError,
	data,
}) => {
	if (isLoading) {
		return <InfoText>Checking server status...</InfoText>;
	}

	if (isError) {
		return (
			<InfoText style={{ color: '#e74c3c' }}>
				Failed to connect to backend server. Please ensure the server is running
				on http://localhost:3001
			</InfoText>
		);
	}

	if (data) {
		return (
			<>
				<InfoText>Server Response:</InfoText>
				<CodeBlock>{JSON.stringify(data, null, 2)}</CodeBlock>
			</>
		);
	}

	return null;
};

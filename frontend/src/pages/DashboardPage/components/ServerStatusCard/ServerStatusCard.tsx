import { useServerStatus } from '@/hooks';
import { ServerActions } from './ServerActions';
import { ServerConnectionStatus } from './ServerConnectionStatus';
import { ServerResponse } from './ServerResponse';
import { Card, Title } from './styles';

export const ServerStatusCard = () => {
	const { data, isLoading, isSuccess, isError, refetch } = useServerStatus();

	return (
		<Card>
			<Title>Server Status</Title>
			<ServerConnectionStatus isConnected={isSuccess} />
			<ServerResponse isLoading={isLoading} isError={isError} data={data} />
			<ServerActions handlePingServer={refetch} />
		</Card>
	);
};

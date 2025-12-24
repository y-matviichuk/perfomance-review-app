import { useServerStatus } from '@/hooks';
import { ServerConnectionStatus } from './ServerConnectionStatus';
import { Card, Title } from './styles';

export const ServerStatusCard = () => {
	const { isSuccess } = useServerStatus();

	return (
		<Card>
			<Title>Server Status</Title>
			<ServerConnectionStatus isConnected={isSuccess} />
		</Card>
	);
};

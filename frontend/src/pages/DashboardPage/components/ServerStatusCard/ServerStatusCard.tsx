import { Card } from '@/components/ui/Card';
import { useServerStatus } from '@/hooks';
import { ServerConnectionStatus } from './ServerConnectionStatus';
import { Title } from './styles';

export const ServerStatusCard = () => {
	const { isSuccess } = useServerStatus();

	return (
		<Card>
			<Title>Server Status</Title>
			<ServerConnectionStatus isConnected={isSuccess} />
		</Card>
	);
};

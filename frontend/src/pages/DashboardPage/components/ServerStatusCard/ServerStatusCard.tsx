import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/Card';
import { useServerStatus } from '@/hooks';
import { ServerConnectionStatus } from './ServerConnectionStatus';
import { Title } from './styles';

export const ServerStatusCard = () => {
	const { t } = useTranslation();
	const { isSuccess } = useServerStatus();

	return (
		<Card>
			<Title>{t('common:server.title')}</Title>
			<ServerConnectionStatus isConnected={isSuccess} />
		</Card>
	);
};

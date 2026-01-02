import { StatusBadge } from '@components/ui/StatusBadge';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StatusLabel, StatusRow } from './styles';

interface ServerConnectionStatusProps {
	isConnected: boolean;
}

export const ServerConnectionStatus: FC<ServerConnectionStatusProps> = ({
	isConnected,
}) => {
	const { t } = useTranslation();

	return (
		<StatusRow>
			<StatusLabel>{t('common:server.connection')}</StatusLabel>
			<StatusBadge isActive={isConnected} />
		</StatusRow>
	);
};

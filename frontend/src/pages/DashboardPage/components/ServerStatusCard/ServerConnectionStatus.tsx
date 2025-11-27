import type { FC } from 'react';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { StatusLabel, StatusRow } from './styles';

interface ServerConnectionStatusProps {
	isConnected: boolean;
}

export const ServerConnectionStatus: FC<ServerConnectionStatusProps> = ({
	isConnected,
}) => {
	return (
		<StatusRow>
			<StatusLabel>Backend Connection:</StatusLabel>
			<StatusBadge isActive={isConnected} />
		</StatusRow>
	);
};

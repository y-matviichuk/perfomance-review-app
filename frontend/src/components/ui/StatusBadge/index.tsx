import type { FC } from 'react';
import { StyledBadge } from './styles';

interface StatusBadgeProps {
	isActive: boolean;
}

export const StatusBadge: FC<StatusBadgeProps> = ({ isActive }) => {
	return (
		<StyledBadge isActive={isActive}>
			{isActive ? 'Online' : 'Offline'}
		</StyledBadge>
	);
};

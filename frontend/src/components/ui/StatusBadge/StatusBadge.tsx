import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledBadge } from './styles';

interface StatusBadgeProps {
	isActive: boolean;
}

export const StatusBadge: FC<StatusBadgeProps> = ({ isActive }) => {
	const { t } = useTranslation();

	return (
		<StyledBadge isActive={isActive}>
			{isActive ? t('common:status.online') : t('common:status.offline')}
		</StyledBadge>
	);
};

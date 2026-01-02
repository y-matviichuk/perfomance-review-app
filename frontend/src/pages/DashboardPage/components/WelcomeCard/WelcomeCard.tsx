import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/Card';
import { InfoText, Title } from './styles';

interface WelcomeCardProps {
	username?: string;
}

export const WelcomeCard: FC<WelcomeCardProps> = ({ username }) => {
	const { t } = useTranslation();

	return (
		<Card>
			<Title>{t('common:greeting', { name: username })}</Title>
			<InfoText>{t('common:greetingSubtext')}</InfoText>
		</Card>
	);
};

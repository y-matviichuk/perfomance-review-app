import type { FC } from 'react';
import { Card, InfoText, Title } from './styles';

interface WelcomeCardProps {
	username?: string;
}

export const WelcomeCard: FC<WelcomeCardProps> = ({ username }) => {
	return (
		<Card>
			<Title>Welcome, {username || 'User'}!</Title>
			<InfoText>
				This is your portfolio manager dashboard. You are now connected to the
				backend server.
			</InfoText>
		</Card>
	);
};

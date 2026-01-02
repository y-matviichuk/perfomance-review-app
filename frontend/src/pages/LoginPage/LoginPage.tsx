import { useAuth } from '@store';
import { useTranslation } from 'react-i18next';

import { Navigate } from 'react-router';
import { LoginForm } from './components/LoginForm';
import { Card, Container, Subtitle, Title } from './styles';

export const LoginPage = () => {
	const isAuthenticated = useAuth((state) => state.isAuthenticated);
	const { t } = useTranslation();

	if (isAuthenticated) {
		return <Navigate to="/dashboard" replace />;
	}

	return (
		<Container>
			<Card>
				<Title>{t('auth:login.title')}</Title>
				<Subtitle>{t('auth:login.subtitle')}</Subtitle>
				<LoginForm />
			</Card>
		</Container>
	);
};

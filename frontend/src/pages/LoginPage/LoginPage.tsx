import { useAuth } from '@store';

import { Navigate } from 'react-router';
import { LoginForm } from './components/LoginForm';
import { Card, Container, Subtitle, Title } from './styles';

export const LoginPage = () => {
	const isAuthenticated = useAuth((state) => state.isAuthenticated);

	if (isAuthenticated) {
		return <Navigate to="/dashboard" replace />;
	}

	return (
		<Container>
			<Card>
				<Title>Welcome Back</Title>
				<Subtitle>Sign in to manage your projects</Subtitle>
				<LoginForm />
			</Card>
		</Container>
	);
};

import { useAuth } from '@store';
import { Navigate, useNavigate } from 'react-router';

import { Button } from '@/components/ui/Button';
import { Card, Container, Subtitle, Title } from './styles';

export const LoginPage = () => {
	const isAuthenticated = useAuth((state) => state.isAuthenticated);
	const login = useAuth((state) => state.login);

	const navigate = useNavigate();

	if (isAuthenticated) {
		return <Navigate to="/dashboard" replace />;
	}

	const handleLogin = () => {
		const mockUser = {
			id: '1',
			username: 'FrontendDev',
			email: 'dev@portfolio.com',
		};

		console.log('Logging in...', mockUser);

		login(mockUser);

		navigate('/dashboard', { replace: true });
	};

	return (
		<Container>
			<Card>
				<Title>Welcome Back</Title>
				<Subtitle>Sign in to manage your projects</Subtitle>
				<Button onClick={handleLogin}>Simulate Login</Button>
			</Card>
		</Container>
	);
};

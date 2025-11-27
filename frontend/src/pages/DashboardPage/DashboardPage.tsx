import { MainLayout } from '@layouts';
import { useAuth } from '@store';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/Button';
import { ServerStatusCard, WelcomeCard } from './components';
import { DashboardContainer } from './styles';

export const DashboardPage = () => {
	const user = useAuth((state) => state.user);
	const logout = useAuth((state) => state.logout);
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/login', { replace: true });
	};

	return (
		<MainLayout
			headerRight={
				<Button variant="danger" onClick={handleLogout}>
					Logout
				</Button>
			}
		>
			<DashboardContainer>
				<WelcomeCard username={user?.username} />
				<ServerStatusCard />
			</DashboardContainer>
		</MainLayout>
	);
};

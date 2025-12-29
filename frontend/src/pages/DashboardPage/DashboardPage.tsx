import { Button } from '@components/ui/Button';
import { MainLayout } from '@layouts';
import { useAuth, useModals } from '@store';
import { useNavigate } from 'react-router';

import {
	AddProjectModal,
	ProjectSection,
	ServerStatusCard,
	WelcomeCard,
} from './components';

import { DashboardContainer } from './styles';

export const DashboardPage = () => {
	const navigate = useNavigate();

	const { user, logout } = useAuth();

	const { createProjectModalOpen, setToggleCreateProjectModal } = useModals();

	const handleLogout = () => {
		logout();
		navigate('/login', { replace: true });
	};

	const handleIFrame = () => {
		navigate('/iframe');
	};

	return (
		<MainLayout
			headerRight={
				<>
					<Button variant="primary" onClick={handleIFrame}>
						IFrame
					</Button>
					<Button variant="primary" onClick={setToggleCreateProjectModal}>
						Add Project
					</Button>
					<Button variant="danger" onClick={handleLogout}>
						Logout
					</Button>
				</>
			}
		>
			<DashboardContainer>
				<WelcomeCard username={user?.username} />
				<ServerStatusCard />
				<ProjectSection />
			</DashboardContainer>

			<AddProjectModal
				isOpen={createProjectModalOpen}
				onOpenChange={setToggleCreateProjectModal}
			/>
		</MainLayout>
	);
};

import { Button } from '@components/ui/Button';
import { MainLayout } from '@layouts';

import { useAuth, useModals } from '@store';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import {
	AddProjectModal,
	LanguageSwitcher,
	ProjectSection,
	ServerStatusCard,
	WelcomeCard,
} from './components';

import { DashboardContainer } from './styles';

export const DashboardPage = () => {
	const { t } = useTranslation();

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
					<LanguageSwitcher />
					<Button variant="primary" onClick={handleIFrame}>
						IFrame
					</Button>
					<Button variant="danger" onClick={handleLogout}>
						{t('auth:login.buttons.logout')}
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

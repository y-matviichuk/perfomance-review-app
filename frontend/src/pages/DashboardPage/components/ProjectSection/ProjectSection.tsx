import { Button } from '@components/ui/Button';
import { useProjectsQuery } from '@hooks/queries/useProjectsQuery';
import { useAuth, useModals } from '@store';
import { generatePortfolioPDF } from '@utils';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ProjectList } from './ProjectList';
import {
	ProjectsButtons,
	ProjectsHeader,
	ProjectsSection,
	ProjectsTitle,
} from './styles';

export const ProjectSection = () => {
	const { t } = useTranslation();
	const { user } = useAuth();
	const { setToggleCreateProjectModal } = useModals();
	const { data: projects } = useProjectsQuery();
	const [isGenerating, setIsGenerating] = useState(false);

	const handleDownloadPDF = useCallback(async () => {
		if (!user || !projects || projects.length === 0) {
			return;
		}

		setIsGenerating(true);
		try {
			await generatePortfolioPDF(user, projects);
		} catch (error) {
			console.error('Failed to generate PDF:', error);
		} finally {
			setIsGenerating(false);
		}
	}, [user, projects]);

	const canDownload = !!user && !!projects && projects.length > 0;

	const projectCount = projects?.length || 0;

	return (
		<ProjectsSection>
			<ProjectsHeader>
				<ProjectsTitle>
					{t('projects:title')} ({t('projects:count', { count: projectCount })})
				</ProjectsTitle>
				<ProjectsButtons>
					<Button variant="primary" onClick={setToggleCreateProjectModal}>
						{t('projects:buttons.add')}
					</Button>
					<Button
						variant="primary"
						onClick={handleDownloadPDF}
						disabled={!canDownload || isGenerating}
					>
						{isGenerating
							? t('projects:buttons.downloadPending')
							: t('projects:downloadPDF')}
					</Button>
				</ProjectsButtons>
			</ProjectsHeader>
			<ProjectList />
		</ProjectsSection>
	);
};

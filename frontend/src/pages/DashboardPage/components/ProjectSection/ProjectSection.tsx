import { Button } from '@components/ui/Button';
import { useProjectsQuery } from '@hooks/queries/useProjectsQuery';
import { useAuth } from '@store';
import { generatePortfolioPDF } from '@utils';
import { useCallback, useState } from 'react';

import { ProjectList } from './ProjectList';
import { ProjectsHeader, ProjectsSection, ProjectsTitle } from './styles';

export const ProjectSection = () => {
	const { user } = useAuth();
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

	return (
		<ProjectsSection>
			<ProjectsHeader>
				<ProjectsTitle>Projects</ProjectsTitle>
				<Button
					variant="primary"
					onClick={handleDownloadPDF}
					disabled={!canDownload || isGenerating}
				>
					{isGenerating ? 'Generating...' : 'Download Portfolio PDF'}
				</Button>
			</ProjectsHeader>
			<ProjectList />
		</ProjectsSection>
	);
};

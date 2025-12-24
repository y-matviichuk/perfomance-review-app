import { ProjectList } from './ProjectList';
import { ProjectsHeader, ProjectsSection, ProjectsTitle } from './styles';

export const ProjectSection = () => {
	return (
		<ProjectsSection>
			<ProjectsHeader>
				<ProjectsTitle>Projects</ProjectsTitle>
			</ProjectsHeader>
			<ProjectList />
		</ProjectsSection>
	);
};

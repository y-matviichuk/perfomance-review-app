import { formatDistanceToNow } from 'date-fns';
import { uk } from 'date-fns/locale';
import type { FC } from 'react';
import { getImageUrl } from '@/api/projects';
import { useProjectsQuery } from '@/hooks';
import {
	EmptyState,
	LoadingState,
	ProjectCard,
	ProjectContent,
	ProjectDate,
	ProjectDescription,
	ProjectGrid,
	ProjectImage,
	ProjectTitle,
} from './styles';

export const ProjectList: FC = () => {
	const { data: projects, isLoading, error } = useProjectsQuery();

	if (isLoading) {
		return <LoadingState>Loading projects...</LoadingState>;
	}

	if (error) {
		return <EmptyState>Failed to load projects</EmptyState>;
	}

	if (!projects?.length) {
		return <EmptyState>No projects yet. Create your first one!</EmptyState>;
	}

	return (
		<ProjectGrid>
			{projects.map((project) => (
				<ProjectCard key={project.id}>
					<ProjectImage
						src={getImageUrl(project.imagePath)}
						alt={project.title}
					/>
					<ProjectContent>
						<ProjectTitle>{project.title}</ProjectTitle>
						<ProjectDescription>{project.description}</ProjectDescription>
						<ProjectDate>
							{formatDistanceToNow(new Date(project.createdAt), {
								addSuffix: true,
								locale: uk,
							})}
						</ProjectDate>
					</ProjectContent>
				</ProjectCard>
			))}
		</ProjectGrid>
	);
};

import { formatDistanceToNow } from 'date-fns';
import { enUS, uk } from 'date-fns/locale';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getImageUrl } from '@/api/projects';
import { Card } from '@/components/ui/Card';
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
	const { t, i18n } = useTranslation();
	const { data: projects, isLoading, error } = useProjectsQuery();

	if (isLoading) {
		return <LoadingState>{t('projects:list.loading')}</LoadingState>;
	}

	if (error) {
		return <EmptyState>{t('projects:list.error')}</EmptyState>;
	}

	if (!projects?.length) {
		return <EmptyState>{t('projects:list.empty')}</EmptyState>;
	}

	const locale = i18n.language === 'ua' ? uk : enUS;

	return (
		<Card>
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
									locale,
								})}
							</ProjectDate>
						</ProjectContent>
					</ProjectCard>
				))}
			</ProjectGrid>
		</Card>
	);
};

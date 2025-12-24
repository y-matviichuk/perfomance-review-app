import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { createProject } from '@/api/projects';
import type { CreateProjectRequest, Project } from '@/types/api';

interface ErrorResponse {
	error: string;
}

export const useCreateProjectMutation = () => {
	const queryClient = useQueryClient();

	return useMutation<Project, AxiosError<ErrorResponse>, CreateProjectRequest>({
		mutationKey: ['createProject'],
		mutationFn: createProject,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['projects'] });
		},
	});
};

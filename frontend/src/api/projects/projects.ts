import { apiClient } from '@/lib/axios';
import type { CreateProjectRequest, Project } from '@/types/api';

export const getProjects = async (): Promise<Project[]> => {
	const { data } = await apiClient.get<Project[]>('/api/projects');
	return data;
};

export const createProject = async (
	request: CreateProjectRequest,
): Promise<Project> => {
	const formData = new FormData();
	formData.append('title', request.title);
	formData.append('description', request.description);
	formData.append('image', request.image);

	const { data } = await apiClient.post<Project>('/api/projects', formData, {
		headers: { 'Content-Type': 'multipart/form-data' },
	});
	return data;
};

export const getImageUrl = (imagePath: string): string => {
	const baseUrl = 'http://localhost:3001';
	return `${baseUrl}/${imagePath}`;
};

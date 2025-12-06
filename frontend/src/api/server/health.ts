import { apiClient } from '@/lib/axios';
import type { ServerResponse } from '@/types/api';

export const fetchServerHealth = async () => {
	const { data } = await apiClient.get<ServerResponse>('/health');
	return data;
};

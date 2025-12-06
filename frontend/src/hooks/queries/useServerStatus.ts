import { useQuery } from '@tanstack/react-query';
import { fetchServerHealth } from '@/api/server';

export const useServerStatus = () => {
	return useQuery({
		queryKey: ['server-status'],
		queryFn: fetchServerHealth,
		retry: 0,
	});
};

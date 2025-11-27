import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface ServerResponse {
	status: string;
	message: string;
	timeStamp: string;
}

const fetchServerStatus = async (): Promise<ServerResponse> => {
	const { data } = await axios.get<ServerResponse>(
		'http://localhost:3001/health',
	);
	return data;
};

export const useServerStatus = () => {
	return useQuery({
		queryKey: ['server-status'],
		queryFn: fetchServerStatus,
		retry: 0,
	});
};

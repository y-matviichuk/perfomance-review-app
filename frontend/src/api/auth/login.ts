import { apiClient } from '@/lib/axios';
import type { LoginRequest, LoginResponse } from '@/types/api';

export const login = async (credentials: LoginRequest) => {
	const { data } = await apiClient.post<LoginResponse>(
		'/api/auth/login',
		credentials,
	);
	return data;
};

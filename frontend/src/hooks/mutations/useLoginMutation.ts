import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router';
import { login } from '@/api/auth';
import { useAuth } from '@/store';
import type { LoginRequest, LoginResponse } from '@/types/api';

interface ErrorResponse {
	error: string;
}

export const useLoginMutation = () => {
	const navigate = useNavigate();
	const loginStore = useAuth((state) => state.login);

	return useMutation<LoginResponse, AxiosError<ErrorResponse>, LoginRequest>({
		mutationKey: ['login'],
		mutationFn: login,
		onSuccess: (response) => {
			loginStore(response.user);
			navigate('/dashboard', { replace: true });
		},
	});
};

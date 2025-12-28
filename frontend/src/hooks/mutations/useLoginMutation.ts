import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router';
import { login } from '@/api/auth';
import { useAuth } from '@/store';
import type { LoginRequest, LoginResponse } from '@/types/api';

import { showErrorToast, showSuccessToast } from '@/utils';

interface ErrorResponse {
	error: string;
}

export const useLoginMutation = () => {
	const navigate = useNavigate();
	const loginStore = useAuth((state) => state.login);

	const handleSuccess = (response: LoginResponse) => {
		loginStore(response.user);
		navigate('/dashboard', { replace: true });
		showSuccessToast('Login successful');
	};

	const handleError = (error: AxiosError<ErrorResponse>) => {
		showErrorToast(error.response?.data.error || 'Login failed');
	};

	return useMutation<LoginResponse, AxiosError<ErrorResponse>, LoginRequest>({
		mutationKey: ['login'],
		mutationFn: login,
		onSuccess: handleSuccess,
		onError: handleError,
	});
};

import { useAuth } from '@store';
import type { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
	const isAuthenticated = useAuth((state) => state.isAuthenticated);

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	return children;
};

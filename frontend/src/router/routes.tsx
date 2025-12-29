import { DashboardPage, IFramePage, LoginPage, NotFoundPage } from '@pages';
import { Navigate, type RouteObject } from 'react-router';
import { ProtectedRoute } from './ProtectedRoute';

const routersPath = {
	LOGIN: '/login',
	DASHBOARD: '/dashboard',
	SHOWCASE: '/iframe',
	ROOT: '/',
	NOT_FOUND: '*',
} as const;

export const routes: RouteObject[] = [
	{
		path: routersPath.LOGIN,
		element: <LoginPage />,
	},
	{
		path: routersPath.DASHBOARD,
		element: (
			<ProtectedRoute>
				<DashboardPage />
			</ProtectedRoute>
		),
	},
	{
		path: routersPath.SHOWCASE,
		element: (
			<ProtectedRoute>
				<IFramePage />
			</ProtectedRoute>
		),
	},
	{
		path: routersPath.ROOT,
		element: <Navigate to={routersPath.DASHBOARD} replace />,
	},
	{
		path: routersPath.NOT_FOUND,
		element: <NotFoundPage />,
	},
];

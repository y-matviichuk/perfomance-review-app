import { createBrowserRouter, RouterProvider } from 'react-router';

import { routes } from './routes';

export const browserRouter = createBrowserRouter(routes);

export const RouterOutlet = () => {
	return <RouterProvider router={browserRouter} />;
};

import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@api': path.resolve(__dirname, 'src', 'api'),
			'@components': path.resolve(__dirname, 'src', 'components'),
			'@hooks': path.resolve(__dirname, 'src', 'hooks'),
			'@layouts': path.resolve(__dirname, 'src', 'layouts'),
			'@pages': path.resolve(__dirname, 'src', 'pages'),
			'@router': path.resolve(__dirname, 'src', 'router'),
			'@store': path.resolve(__dirname, 'src', 'store'),
			'@styles': path.resolve(__dirname, 'src', 'styles'),
			'@providers': path.resolve(__dirname, 'src', 'providers'),
		},
	},
});

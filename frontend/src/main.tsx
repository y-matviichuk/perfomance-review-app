import { Toast } from '@components/ui/Toast';

import { ReactQueryProvider } from '@providers';

import '@/lib/i18n';

import { RouterOutlet } from '@router';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GlobalStyle } from './styles';

const rootElement = document.getElementById('root');

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<GlobalStyle />
			<Toast />
			<ReactQueryProvider>
				<RouterOutlet />
			</ReactQueryProvider>
		</StrictMode>,
	);
}

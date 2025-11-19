import { RouterOutlet } from '@router';
import { GlobalStyle } from '@styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactQueryProvider } from '@/providers';

const rootElement = document.getElementById('root');

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<ReactQueryProvider>
				<GlobalStyle />
				<RouterOutlet />
			</ReactQueryProvider>
		</StrictMode>,
	);
}

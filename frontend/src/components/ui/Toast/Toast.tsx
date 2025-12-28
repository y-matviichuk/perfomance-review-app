import { onEvent } from '@utils/eventBus';
import { useEffect, useRef, useState } from 'react';
import { CloseButton, ToastContainer, ToastItem, ToastMessage } from './styles';

interface ToastData {
	id: string;
	type: 'success' | 'error' | 'warning' | 'info';
	message: string;
}

export const Toast = () => {
	const [toasts, setToasts] = useState<ToastData[]>([]);
	const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

	useEffect(() => {
		const unsubscribe = onEvent('toast:show', (data: ToastData) => {
			const newToast: ToastData = {
				id: `toast-${Date.now()}`,
				type: data.type,
				message: data.message,
			};

			setToasts((prev) => [...prev, newToast]);

			const timeoutId = setTimeout(() => {
				setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
			}, 5000);

			timeoutsRef.current.push(timeoutId);
		});

		return () => {
			unsubscribe();
			timeoutsRef.current.forEach(clearTimeout);
			timeoutsRef.current = [];
		};
	}, []);

	const handleClose = (id: string) => {
		setToasts((prev) => prev.filter((t) => t.id !== id));
	};

	return (
		<ToastContainer>
			{toasts.map((toast) => (
				<ToastItem key={toast.id} $type={toast.type}>
					<ToastMessage>{toast.message}</ToastMessage>
					<CloseButton onClick={() => handleClose(toast.id)}>×</CloseButton>
				</ToastItem>
			))}
		</ToastContainer>
	);
};

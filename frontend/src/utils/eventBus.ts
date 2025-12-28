export type EventPayload = {
	type: string;
	data: any;
};

export const emitEvent = (eventName: string, data: any): void => {
	const event = new CustomEvent(eventName, {
		detail: data,
	});
	document.dispatchEvent(event);
};

export const onEvent = (
	eventName: string,
	callback: (data: any) => void,
): (() => void) => {
	const handler = (event: Event) => {
		const customEvent = event as CustomEvent;
		callback(customEvent.detail);
	};

	document.addEventListener(eventName, handler);

	return () => {
		document.removeEventListener(eventName, handler);
	};
};

export const showToast = (
	type: 'success' | 'error' | 'warning' | 'info',
	message: string,
): void => {
	emitEvent('toast:show', { type, message });
};

export const showErrorToast = (message: string): void => {
	showToast('error', message);
};

export const showSuccessToast = (message: string): void => {
	showToast('success', message);
};

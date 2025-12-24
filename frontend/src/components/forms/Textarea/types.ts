import type { ComponentProps } from 'react';

export interface TextareaProps
	extends Omit<ComponentProps<'textarea'>, 'name'> {
	name: string;
	label: string;
	placeholder?: string;
}

import type { ComponentProps } from 'react';

export interface InputProps extends Omit<ComponentProps<'input'>, 'name'> {
	name: string;
	label: string;
	type?: string;
	placeholder?: string;
}

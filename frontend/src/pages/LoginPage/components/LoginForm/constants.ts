import type { TLoginForm } from '@schemas';
import type { FormField } from './types';

export const LOGIN_FORM_DEFAULT_VALUES: TLoginForm = {
	email: '',
	password: '',
};

export const LOGIN_FORM_FIELDS: FormField[] = [
	{
		name: 'email',
		label: 'Email',
		type: 'email',
		placeholder: 'your.email@example.com',
	},
	{
		name: 'password',
		label: 'Password',
		type: 'password',
		placeholder: 'Enter your password',
	},
];

import type { TLoginForm } from '@schemas';
import type { FormField } from './types';

export const LOGIN_FORM_DEFAULT_VALUES: TLoginForm = {
	email: '',
	password: '',
};

export const LOGIN_FORM_FIELDS: FormField[] = [
	{
		name: 'email',
		label: 'auth:login.fields.email',
		type: 'email',
		placeholder: 'auth:login.fields.emailPlaceholder',
	},
	{
		name: 'password',
		label: 'auth:login.fields.password',
		type: 'password',
		placeholder: 'auth:login.fields.passwordPlaceholder',
	},
];

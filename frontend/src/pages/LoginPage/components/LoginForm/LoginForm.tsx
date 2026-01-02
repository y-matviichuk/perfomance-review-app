import { Input } from '@components/forms/Input';
import { Button } from '@components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { getLoginSchema, type TLoginForm } from '@schemas';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useLoginMutation } from '@/hooks';

import { LOGIN_FORM_DEFAULT_VALUES, LOGIN_FORM_FIELDS } from './constants';

import { ErrorMessage, Form } from './styles';

export const LoginForm = () => {
	const { t } = useTranslation();

	const methods = useForm<TLoginForm>({
		resolver: zodResolver(getLoginSchema(t)),
		defaultValues: LOGIN_FORM_DEFAULT_VALUES,
	});

	const {
		mutate: loginMutation,
		error: loginError,
		isPending: loginIsPending,
	} = useLoginMutation();

	const handleSubmit = useCallback(
		async (data: TLoginForm) => {
			loginMutation({
				email: data.email,
				password: data.password,
			});
		},
		[loginMutation],
	);

	return (
		<FormProvider {...methods}>
			<Form onSubmit={methods.handleSubmit(handleSubmit)}>
				{LOGIN_FORM_FIELDS.map((item) => (
					<Input
						key={item.name}
						name={item.name}
						label={t(item.label)}
						type={item.type}
						placeholder={t(item.placeholder)}
					/>
				))}
				{loginError && (
					<ErrorMessage>{loginError.response?.data?.error}</ErrorMessage>
				)}
				<Button variant="primary" type="submit" disabled={loginIsPending}>
					{loginIsPending
						? t('auth:login.submitPending')
						: t('auth:login.submit')}
				</Button>
			</Form>
		</FormProvider>
	);
};

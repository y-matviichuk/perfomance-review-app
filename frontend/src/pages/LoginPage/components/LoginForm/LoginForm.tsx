import { Input } from '@components/forms/Input';
import { Button } from '@components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, type TLoginForm } from '@schemas';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useLoginMutation } from '@/hooks';
import { LOGIN_FORM_DEFAULT_VALUES, LOGIN_FORM_FIELDS } from './constants';
import { ErrorMessage, Form } from './styles';

export const LoginForm = () => {
	const methods = useForm<TLoginForm>({
		resolver: zodResolver(LoginSchema),
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
						label={item.label}
						type={item.type}
						placeholder={item.placeholder}
					/>
				))}
				{loginError && (
					<ErrorMessage>{loginError.response?.data?.error}</ErrorMessage>
				)}
				<Button variant="primary" type="submit" disabled={loginIsPending}>
					{loginIsPending ? 'Signing in...' : 'Sign In'}
				</Button>
			</Form>
		</FormProvider>
	);
};

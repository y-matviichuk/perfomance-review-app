import { Input } from '@components/forms/Input';
import { Button } from '@components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, type TLoginForm } from '@schemas';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useAuth } from '@/store';
import { LOGIN_FORM_DEFAULT_VALUES, LOGIN_FORM_FIELDS } from './constants';
import { Form } from './styles';

export const LoginForm = () => {
	const navigate = useNavigate();
	const login = useAuth((state) => state.login);

	const methods = useForm<TLoginForm>({
		resolver: zodResolver(LoginSchema),
		defaultValues: LOGIN_FORM_DEFAULT_VALUES,
	});

	const handleSubmit = (data: TLoginForm) => {
		const mockUser = {
			id: '1',
			username: data.email.split('@')[0],
			email: data.email,
		};

		login(mockUser);

		navigate('/dashboard', { replace: true });
	};

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
				<Button variant="primary" type="submit">
					Sign In
				</Button>
			</Form>
		</FormProvider>
	);
};

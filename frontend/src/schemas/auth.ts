import { z } from 'zod';

// 1 lowercase, 1 uppercase, 1 number, 1 special character
const passwordRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/;

export const LoginSchema = z.object({
	email: z.string().min(1, 'Email is required').email('Invalid email format'),
	password: z
		.string()
		.min(8, 'Password must be at least 8 characters long')
		.max(12, 'Password must be at most 12 characters long')
		.regex(
			passwordRegex,
			'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
		),
});

export type TLoginForm = z.infer<typeof LoginSchema>;

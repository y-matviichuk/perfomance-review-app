import type { TFunction } from 'i18next';
import { z } from 'zod';

// 1 lowercase, 1 uppercase, 1 number, 1 special character
const passwordRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/;

export const getLoginSchema = (t: TFunction) =>
	z.object({
		email: z
			.string()
			.min(1, t('auth:validation.emailRequired'))
			.email(t('auth:validation.emailInvalid')),
		password: z
			.string()
			.min(8, t('auth:validation.passwordMinLength'))
			.max(12, t('auth:validation.passwordMaxLength'))
			.regex(passwordRegex, t('auth:validation.passwordFormat')),
	});

export type TLoginForm = z.infer<ReturnType<typeof getLoginSchema>>;

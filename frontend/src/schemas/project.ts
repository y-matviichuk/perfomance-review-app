import type { TFunction } from 'i18next';
import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

export const getProjectSchema = (t: TFunction) =>
	z.object({
		title: z.string().min(3, t('projects:validation.titleMinLength')),
		description: z
			.string()
			.min(10, t('projects:validation.descriptionMinLength')),
		image: z
			.instanceof(File, { message: t('projects:validation.imageRequired') })
			.refine(
				(file) => file.size <= MAX_FILE_SIZE,
				t('projects:validation.imageMaxSize'),
			)
			.refine(
				(file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
				t('projects:validation.imageFormat'),
			),
	});

export type TProjectForm = z.infer<ReturnType<typeof getProjectSchema>>;

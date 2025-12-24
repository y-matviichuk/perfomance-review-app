import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

export const ProjectSchema = z.object({
	title: z.string().min(3, 'Title must be at least 3 characters'),
	description: z.string().min(10, 'Description must be at least 10 characters'),
	image: z
		.instanceof(File, { message: 'Image is required' })
		.refine((file) => file.size <= MAX_FILE_SIZE, 'Max file size is 5MB')
		.refine(
			(file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
			'Only .jpg, .jpeg, .png formats are supported',
		),
});

export type TProjectForm = z.infer<typeof ProjectSchema>;

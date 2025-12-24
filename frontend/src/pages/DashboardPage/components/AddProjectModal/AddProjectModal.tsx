import { FileInput } from '@components/forms/FileInput';
import { Input } from '@components/forms/Input';
import { Textarea } from '@components/forms/Textarea';
import { Button } from '@components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { ProjectSchema, type TProjectForm } from '@schemas/project';
import type { FC } from 'react';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useCreateProjectMutation } from '@/hooks';
import { PROJECT_FORM_DEFAULT_VALUES } from './constants';
import {
	ErrorMessage,
	Form,
	StyledClose,
	StyledContent,
	StyledOverlay,
	StyledTitle,
} from './styles';
import type { AddProjectModalProps } from './types';

export const AddProjectModal: FC<AddProjectModalProps> = ({
	isOpen,
	onOpenChange,
}) => {
	const methods = useForm<TProjectForm>({
		resolver: zodResolver(ProjectSchema),
		defaultValues: PROJECT_FORM_DEFAULT_VALUES,
	});

	const {
		mutate: createProjectMutation,
		error: createError,
		isPending,
	} = useCreateProjectMutation();

	const handleSubmit = useCallback(
		(data: TProjectForm) => {
			createProjectMutation(data, {
				onSuccess: () => {
					methods.reset();
					onOpenChange(false);
				},
			});
		},
		[createProjectMutation, methods, onOpenChange],
	);

	return (
		<Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
			<Dialog.Portal>
				<StyledOverlay />
				<StyledContent>
					<StyledTitle>Add New Project</StyledTitle>
					<StyledClose aria-label="Close">&times;</StyledClose>

					<FormProvider {...methods}>
						<Form onSubmit={methods.handleSubmit(handleSubmit)}>
							<Input name="title" label="Title" placeholder="Project title" />
							<Textarea
								name="description"
								label="Description"
								placeholder="Project description"
							/>
							<FileInput name="image" label="Project Image" />

							{createError && (
								<ErrorMessage>{createError.response?.data?.error}</ErrorMessage>
							)}

							<Button variant="primary" type="submit" disabled={isPending}>
								{isPending ? 'Creating...' : 'Create Project'}
							</Button>
						</Form>
					</FormProvider>
				</StyledContent>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

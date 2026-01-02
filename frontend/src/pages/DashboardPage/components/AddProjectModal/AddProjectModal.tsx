import { FileInput } from '@components/forms/FileInput';
import { Input } from '@components/forms/Input';
import { Textarea } from '@components/forms/Textarea';
import { Button } from '@components/ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { getProjectSchema, type TProjectForm } from '@schemas/project';
import type { FC } from 'react';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
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
	const { t } = useTranslation();
	const methods = useForm<TProjectForm>({
		resolver: zodResolver(getProjectSchema(t)),
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
					<StyledTitle>{t('projects:addProject.title')}</StyledTitle>
					<StyledClose aria-label="Close">&times;</StyledClose>

					<FormProvider {...methods}>
						<Form onSubmit={methods.handleSubmit(handleSubmit)}>
							<Input
								name="title"
								label={t('projects:addProject.fields.title')}
								placeholder={t('projects:addProject.fields.titlePlaceholder')}
							/>
							<Textarea
								name="description"
								label={t('projects:addProject.fields.description')}
								placeholder={t(
									'projects:addProject.fields.descriptionPlaceholder',
								)}
							/>
							<FileInput
								name="image"
								label={t('projects:addProject.fields.image')}
							/>

							{createError && (
								<ErrorMessage>{createError.response?.data?.error}</ErrorMessage>
							)}

							<Button variant="primary" type="submit" disabled={isPending}>
								{isPending
									? t('projects:addProject.buttons.submitPending')
									: t('projects:addProject.buttons.submit')}
							</Button>
						</Form>
					</FormProvider>
				</StyledContent>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

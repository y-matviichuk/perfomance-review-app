import type { FC } from 'react';
import { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useController, useFormContext } from 'react-hook-form';

import {
	DropZone,
	ErrorMessage,
	FileInputWrapper,
	Label,
	Preview,
} from './styles';
import type { FileInputProps } from './types';

export const FileInput: FC<FileInputProps> = ({ name, label }) => {
	const { control } = useFormContext();
	const {
		field: { onChange, value },
		fieldState: { error },
	} = useController({ name, control });

	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			if (acceptedFiles.length > 0) {
				onChange(acceptedFiles[0]);
			}
		},
		[onChange],
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { 'image/*': ['.jpeg', '.jpg', '.png'] },
		maxSize: 5 * 1024 * 1024,
		multiple: false,
	});

	const preview = value instanceof File ? URL.createObjectURL(value) : null;

	useEffect(() => {
		return () => {
			if (preview) {
				URL.revokeObjectURL(preview);
			}
		};
	}, [preview]);

	return (
		<FileInputWrapper>
			<Label>{label}</Label>
			<DropZone
				{...getRootProps()}
				$hasError={!!error}
				$isDragActive={isDragActive}
			>
				<input {...getInputProps()} />
				{preview ? (
					<Preview src={preview} alt="Preview" />
				) : (
					<span>
						{isDragActive
							? 'Drop the file here...'
							: 'Drag & drop or click to select'}
					</span>
				)}
			</DropZone>
			{error && <ErrorMessage>{error.message}</ErrorMessage>}
		</FileInputWrapper>
	);
};

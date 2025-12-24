import type { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { ErrorMessage, Label, StyledTextarea, TextareaWrapper } from './styles';
import type { TextareaProps } from './types';

export const Textarea: FC<TextareaProps> = ({
	name,
	label,
	placeholder,
	...props
}) => {
	const { control } = useFormContext();
	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		control,
	});

	const errorId = error ? `${name}-error` : undefined;

	return (
		<TextareaWrapper>
			<Label htmlFor={name}>{label}</Label>
			<StyledTextarea
				{...field}
				{...props}
				id={name}
				placeholder={placeholder}
				$hasError={!!error}
				aria-invalid={!!error}
				aria-describedby={errorId}
			/>
			{error && <ErrorMessage id={errorId}>{error.message}</ErrorMessage>}
		</TextareaWrapper>
	);
};

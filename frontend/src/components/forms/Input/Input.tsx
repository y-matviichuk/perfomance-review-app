import type { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { ErrorMessage, InputWrapper, Label, StyledInput } from './styles';
import type { InputProps } from './types';

export const Input: FC<InputProps> = ({
	name,
	label,
	type = 'text',
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
		<InputWrapper>
			<Label htmlFor={name}>{label}</Label>
			<StyledInput
				{...field}
				{...props}
				id={name}
				type={type}
				placeholder={placeholder}
				$hasError={!!error}
				aria-invalid={!!error}
				aria-describedby={errorId}
			/>
			{error && <ErrorMessage id={errorId}>{error.message}</ErrorMessage>}
		</InputWrapper>
	);
};

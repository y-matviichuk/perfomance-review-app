import type { ComponentProps, FC } from 'react';
import { StyledButton } from './styles';
import type { ButtonVariant } from './types';

interface ButtonProps extends ComponentProps<'button'> {
	variant: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({ children, variant, ...props }) => {
	return (
		<StyledButton variant={variant} {...props}>
			{children}
		</StyledButton>
	);
};

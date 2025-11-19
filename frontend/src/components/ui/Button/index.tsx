import type { ComponentProps, FC } from 'react';
import { StyledButton } from './styles';

type ButtonProps = ComponentProps<'button'>;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};

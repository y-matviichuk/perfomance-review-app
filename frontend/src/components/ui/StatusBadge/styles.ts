import styled from 'styled-components';

interface StyledBadgeProps {
	isActive: boolean;
}

export const StyledBadge = styled.span<StyledBadgeProps>`
	display: inline-block;
	padding: 0.375rem 0.75rem;
	border-radius: 1rem;
	font-size: 0.875rem;
	font-weight: 600;
	color: white;
	background-color: ${({ isActive }) => (isActive ? '#2ecc71' : '#e74c3c')};
	transition: background-color 0.2s;
`;

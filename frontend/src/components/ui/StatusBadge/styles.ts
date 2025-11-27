import styled from 'styled-components';

interface StyledBadgeProps {
	isActive: boolean;
}

export const StyledBadge = styled.span<StyledBadgeProps>`
	display: inline-block;
	padding: 6px 12px;
	border-radius: 16px;
	font-size: 14px;
	font-weight: 600;
	color: white;
	background-color: ${({ isActive }) => (isActive ? '#2ecc71' : '#e74c3c')};
	transition: background-color 0.2s;
`;

import styled from 'styled-components';

export const LayoutContainer = styled.div`
	min-height: 100vh;
	background-color: #f0f2f5;
`;

export const Header = styled.header`
	background-color: white;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 16px 24px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.h1`
	font-size: 24px;
	font-weight: 700;
	color: #007bff;
	margin: 0;
`;

export const HeaderRight = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

export const MainContent = styled.main`
	padding: 24px;
`;

import styled from 'styled-components';

const Page = styled.div`
  padding: 20px;
`;

export const DashboardPage = () => {
	return (
		<Page>
			<h1>Dashboard (Private)</h1>
			<p>Welcome to your portfolio manager!</p>
		</Page>
	);
};

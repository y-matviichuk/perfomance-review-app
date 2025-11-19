import styled from 'styled-components';

const Page = styled.div`
  text-align: center;
  margin-top: 50px;
  color: red;
`;

export const NotFoundPage = () => {
	return (
		<Page>
			<h1>404 - Page Not Found</h1>
		</Page>
	);
};

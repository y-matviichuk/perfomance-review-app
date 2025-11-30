import type { FC, PropsWithChildren, ReactNode } from 'react';
import {
	Header,
	HeaderRight,
	LayoutContainer,
	Logo,
	MainContent,
} from './styles';

interface MainLayoutProps extends PropsWithChildren {
	headerRight?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children, headerRight }) => {
	return (
		<LayoutContainer>
			<Header>
				<Logo>Portfolio Manager</Logo>
				{headerRight && <HeaderRight>{headerRight}</HeaderRight>}
			</Header>
			<MainContent>{children}</MainContent>
		</LayoutContainer>
	);
};

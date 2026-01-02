import styled from 'styled-components';

export const ProjectsSection = styled.div`
	margin-top: 2rem;
`;

export const ProjectsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
`;

export const ProjectsButtons = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const ProjectsTitle = styled.h2`
	margin: 0;
	font-size: 1.5rem;
	font-weight: 700;
	color: #333;
`;

export const ProjectGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 1.5rem;
`;

export const ProjectCard = styled.div`
	max-width: 21.875rem;
	background: white;
	border-radius: 0.75rem;
	overflow: hidden;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s, box-shadow 0.2s;

	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
	}
`;

export const ProjectImage = styled.img`
	width: 100%;
	height: 180px;
	object-fit: cover;
`;

export const ProjectContent = styled.div`
	padding: 1.25rem;
`;

export const ProjectTitle = styled.h3`
	margin: 0 0 0.5rem;
	font-size: 1.125rem;
	font-weight: 600;
	color: #1a1a1a;
`;

export const ProjectDescription = styled.p`
	margin: 0 0 0.75rem;
	font-size: 0.875rem;
	color: #666;
	line-height: 1.5;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const ProjectDate = styled.span`
	font-size: 0.75rem;
	color: #999;
`;

export const LoadingState = styled.div`
	text-align: center;
	padding: 2rem;
	color: #666;
`;

export const EmptyState = styled.div`
	text-align: center;
	padding: 3rem;
	color: #666;
	background: #f9f9f9;
	border-radius: 0.5rem;
`;

import styled from 'styled-components';

export const IFrameContainer = styled.div`
	max-width: 75rem;
	margin: 0 auto;
	padding: 2rem;

	h1 {
		margin-bottom: 2rem;
	}
`;

export const VideoWrapper = styled.div`
	aspect-ratio: 16 / 9;
	width: 100%;

	iframe {
		width: 100%;
		height: 100%;   
	}
`;

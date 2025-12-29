import { MainLayout } from '@layouts';

import { IFrameContainer, VideoWrapper } from './styles';

export const IFramePage = () => {
	return (
		<MainLayout>
			<IFrameContainer>
				<h1>YouTube Video Embed</h1>

				<VideoWrapper>
					<iframe
						src="https://www.youtube.com/embed/dQw4w9WgXcQ"
						title="YouTube video"
						allowFullScreen
						sandbox="allow-scripts allow-same-origin allow-presentation"
					/>
				</VideoWrapper>
			</IFrameContainer>
		</MainLayout>
	);
};

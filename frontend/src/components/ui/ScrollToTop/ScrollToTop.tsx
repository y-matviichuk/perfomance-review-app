import { useEffect, useRef, useState } from 'react';
import { ScrollButton, ScrollSentinel } from './styles';

export const ScrollToTop = () => {
	const [showScrollButton, setShowScrollButton] = useState(false);
	const sentinelRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setShowScrollButton(!entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0,
			},
		);

		if (sentinelRef.current) {
			observer.observe(sentinelRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<ScrollSentinel ref={sentinelRef} aria-hidden="true" />
			<ScrollButton
				$isVisible={showScrollButton}
				onClick={scrollToTop}
				aria-label="Scroll to top"
			>
				<svg
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path d="M12 4l-8 8h6v8h4v-8h6z" />
				</svg>
			</ScrollButton>
		</>
	);
};

export const loadImage = (url: string): Promise<HTMLImageElement> =>
	new Promise((resolve, reject) => {
		const img = new Image();

		img.crossOrigin = 'Anonymous';
		img.src = url;

		img.onload = () => resolve(img);

		img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
	});

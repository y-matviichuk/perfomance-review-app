import { format } from 'date-fns';
import { jsPDF } from 'jspdf';
import { getImageUrl } from '@/api/projects';
import type { Project, User } from '@/types/api';
import {
	PAGE_BREAK_THRESHOLD,
	PAGE_BREAK_WITH_IMAGE_THRESHOLD,
	PROJECT_IMAGE_MAX_HEIGHT,
	PROJECT_IMAGE_MAX_WIDTH,
} from './constants';
import { loadImage } from './loadImage';

export const generatePortfolioPDF = async (user: User, projects: Project[]) => {
	const doc = new jsPDF();
	let yPos = 20;

	// Header
	doc.setFontSize(24);
	doc.text('Portfolio', 20, yPos);
	yPos += 15;

	// User Info
	doc.setFontSize(14);
	doc.text(`Name: ${user.username}`, 20, yPos);
	yPos += 10;
	doc.text(`Email: ${user.email}`, 20, yPos);
	yPos += 20;

	doc.line(20, yPos, 190, yPos);
	yPos += 20;

	// Projects
	doc.setFontSize(18);
	doc.text('My Projects', 20, yPos);
	yPos += 15;

	for (const project of projects) {
		if (yPos > PAGE_BREAK_THRESHOLD) {
			doc.addPage();
			yPos = 20;
		}

		doc.setFontSize(16);
		doc.text(project.title, 20, yPos);
		yPos += 10;

		doc.setFontSize(10);
		doc.setTextColor(100);
		const date = format(new Date(project.createdAt), 'PPP');
		doc.text(date, 20, yPos);
		doc.setTextColor(0);
		yPos += 10;

		doc.setFontSize(12);
		const splitDescription: string[] = doc.splitTextToSize(
			project.description,
			170,
		);
		doc.text(splitDescription, 20, yPos);
		yPos += splitDescription.length * 7 + 10;

		try {
			if (project.imagePath) {
				const imageUrl = getImageUrl(project.imagePath);
				const imageElement = await loadImage(imageUrl);

				if (yPos + PROJECT_IMAGE_MAX_HEIGHT > PAGE_BREAK_WITH_IMAGE_THRESHOLD) {
					doc.addPage();
					yPos = 20;
				}

				doc.addImage(
					imageElement,
					'JPEG',
					20,
					yPos,
					PROJECT_IMAGE_MAX_WIDTH,
					PROJECT_IMAGE_MAX_HEIGHT,
				);
				yPos += PROJECT_IMAGE_MAX_HEIGHT + 10;
			}
		} catch (e) {
			console.warn('Failed to add image to PDF', e);
		}

		yPos += 10;
	}

	doc.save(`${user.username}-portfolio.pdf`);
};

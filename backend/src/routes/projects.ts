import express from 'express';
import { readProjects, writeProjects } from '../databases/projects/projects-db';
import { upload } from '../middleware/upload';
import type { Project } from '../types/project';

const router = express.Router();

router.post('/', upload.single('image'), async (req, res) => {
	try {
		if (!req.file) {
			return res.status(400).json({ error: 'Image is required' });
		}

		const { title, description } = req.body;

		if (!title || !description) {
			return res
				.status(400)
				.json({ error: 'Title and description are required' });
		}

		const newProject: Project = {
			id: Date.now().toString(),
			title,
			description,
			imagePath: `uploads/${req.file.filename}`,
			createdAt: new Date().toISOString(),
		};

		const projects = await readProjects();

		projects.push(newProject);

		await writeProjects(projects);

		res.status(201).json(newProject);
	} catch (error) {
		console.error('Error creating project:', error);
		res.status(500).json({ error: 'Failed to create project' });
	}
});

router.get('/', async (req, res) => {
	try {
		const projects = await readProjects();
		res.status(200).json(projects);
	} catch (error) {
		console.error('Error fetching projects:', error);
		res.status(500).json({ error: 'Failed to fetch projects' });
	}
});

export const projectsRoutes = router;

import fs from 'node:fs/promises';
import path from 'node:path';
import type { Project } from '../../types/project';

const DB_PATH = path.join(__dirname, 'projects.json');

export const readProjects = async (): Promise<Project[]> => {
	try {
		const data = await fs.readFile(DB_PATH, 'utf-8');
		return JSON.parse(data);
	} catch {
		return [];
	}
};

export const writeProjects = async (projects: Project[]) => {
	await fs.writeFile(DB_PATH, JSON.stringify(projects, null, 2), 'utf-8');
};

import * as fs from 'node:fs';
import * as path from 'node:path';
import type { User } from '../types';

const DB_PATH = path.join(__dirname, 'users.json');

export const readUsers = () => {
	try {
		const data = fs.readFileSync(DB_PATH, 'utf-8');
		return JSON.parse(data) as User[];
	} catch (error) {
		console.error('Error reading users database:', error);
		return [];
	}
};

export const findUserByEmail = (email: string): User | undefined => {
	const users = readUsers();
	return users.find((user) => user.email === email);
};

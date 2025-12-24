// Auth types
export interface LoginRequest {
	email: string;
	password: string;
}

export interface User {
	id: string;
	username: string;
	email: string;
}

export interface LoginResponse {
	message: string;
	user: User;
}

// Server types
export interface ServerResponse {
	status: string;
	message: string;
	timeStamp: string;
}

// Project types
export interface Project {
	id: string;
	title: string;
	description: string;
	imagePath: string;
	createdAt: string;
}

export interface CreateProjectRequest {
	title: string;
	description: string;
	image: File;
}

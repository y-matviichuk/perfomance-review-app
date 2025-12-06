export interface LoginRequest {
	email: string;
	password: string;
}

export interface UserResponse {
	id: string;
	username: string;
	email: string;
}

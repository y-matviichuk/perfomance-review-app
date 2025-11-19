export interface User {
	id: string;
	username: string;
	email: string;
}

export interface AuthState {
	user: User | null;
	isAuthenticated: boolean;
	login: (userData: User) => void;
	logout: () => void;
}

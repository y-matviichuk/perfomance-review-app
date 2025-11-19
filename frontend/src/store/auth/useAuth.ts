import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { AuthState } from './types';

const AUTH_STORAGE_KEY = 'portfolio-auth-storage';

export const useAuth = create<AuthState>()(
	persist(
		(set) => ({
			user: null,
			isAuthenticated: false,

			login: (userData) => {
				set({ user: userData, isAuthenticated: true });
			},
			logout: () => {
				set({ user: null, isAuthenticated: false });
			},
		}),
		{
			name: AUTH_STORAGE_KEY,
			storage: createJSONStorage(() => localStorage),
		},
	),
);

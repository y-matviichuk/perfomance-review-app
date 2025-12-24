import { create } from 'zustand';

interface ModalsState {
	createProjectModalOpen: boolean;
	setToggleCreateProjectModal: () => void;
}

export const useModals = create<ModalsState>()((set) => ({
	createProjectModalOpen: false,

	setToggleCreateProjectModal: () =>
		set((state) => ({
			createProjectModalOpen: !state.createProjectModalOpen,
		})),
}));

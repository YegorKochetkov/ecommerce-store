import { create } from 'zustand';

import { Product } from '@/types';

type PreviewModalStore = {
	isOpen: boolean;
	data?: Product;
	open: (data: Product) => void;
	close: () => void;
};

const usePreviewModal = create<PreviewModalStore>((set) => ({
	isOpen: false,
	data: undefined,
	open: (data) => set({ isOpen: true, data }),
	close: () => set({ isOpen: false }),
}));

export default usePreviewModal;

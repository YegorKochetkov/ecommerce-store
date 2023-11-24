import { Category } from '@/types';

const categoriesUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
let controller: AbortController;

export const getCategories = async (): Promise<Category[]> => {
	try {
		if (controller) {
			controller.abort();
		}

		controller = new AbortController();

		const res = await fetch(categoriesUrl, { signal: controller.signal });

		return res.json();
	} catch (error) {
		console.debug('Can`t load all products', error);

		return [];
	}
};

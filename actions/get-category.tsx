import { Category } from '@/types';

const categoryUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
let controller: AbortController;

export const getCategory = async (id: string): Promise<Category> => {
	try {
		if (controller) {
			controller.abort();
		}

		controller = new AbortController();

		const res = await fetch(`${categoryUrl}/${id}`, {
			signal: controller.signal,
		});

		return res.json();
	} catch (error) {
		console.debug('Can`t load all products', error);

		return {} as Category;
	}
};

import { Product } from '@/types';

const productsUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;
let controller: AbortController;

export const getProduct = async (id: string): Promise<Product> => {
	try {
		if (controller) {
			controller.abort();
		}

		controller = new AbortController();

		const res = await fetch(`${productsUrl}/${id}`, {
			signal: controller.signal,
		});

		return res.json();
	} catch (error) {
		console.debug('Can`t load all products', error);

		return {} as Product;
	}
};

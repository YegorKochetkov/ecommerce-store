import queryString from 'query-string';

import { Product } from '@/types';

const productsUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;
let controller: AbortController;

type Query = {
	categoryId?: string | string[];
	colorId?: string | string[];
	sizeId?: string | string[];
	isFeatured?: boolean;
};

export const getProducts = async (query: Query): Promise<Product[]> => {
	const url = queryString.stringifyUrl({
		url: productsUrl,
		query,
	});

	try {
		if (controller) {
			controller.abort();
		}

		controller = new AbortController();

		const res = await fetch(url, { signal: controller.signal });

		return res.json();
	} catch (error) {
		console.debug('Can`t load all products', error);

		return [];
	}
};

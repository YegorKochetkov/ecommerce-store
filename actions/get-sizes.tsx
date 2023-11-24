import { Size } from '@/types';

const sizesUrl = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;
let controller: AbortController;

export const getSizes = async (): Promise<Size[]> => {
	try {
		if (controller) {
			controller.abort();
		}

		controller = new AbortController();

		const res = await fetch(sizesUrl, { signal: controller.signal });

		return res.json();
	} catch (error) {
		console.debug('Can`t load all products', error);

		return [];
	}
};

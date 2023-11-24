import { Color } from '@/types';

const colorsUrl = `${process.env.NEXT_PUBLIC_API_URL}/colors`;
let controller: AbortController;

export const getColors = async (): Promise<Color[]> => {
	try {
		if (controller) {
			controller.abort();
		}

		controller = new AbortController();

		const res = await fetch(colorsUrl, { signal: controller.signal });

		return res.json();
	} catch (error) {
		console.debug('Can`t load all products', error);

		return [];
	}
};

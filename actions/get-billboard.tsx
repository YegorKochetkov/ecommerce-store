import { Billboard } from '@/types';

const billboardsUrl = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
let controller: AbortController;

export const getBillboard = async (id: string): Promise<Billboard> => {
	try {
		if (controller) {
			controller.abort();
		}

		controller = new AbortController();

		const res = await fetch(`${billboardsUrl}/${id}`, {
			signal: controller.signal,
		});

		return res.json();
	} catch (error) {
		console.debug('Can`t load all products', error);

		return {} as Billboard;
	}
};

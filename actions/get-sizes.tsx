import { Size } from '@/types';

const sizesUrl = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
	const res = await fetch(sizesUrl);

	return res.json();
};

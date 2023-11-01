import { Color } from '@/types';

const colorsUrl = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColors = async (): Promise<Color[]> => {
	const res = await fetch(colorsUrl);

	return res.json();
};

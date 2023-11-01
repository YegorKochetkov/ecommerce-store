import { Category } from '@/types';

const categoryUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (id: string): Promise<Category> => {
	const res = await fetch(`${categoryUrl}/${id}`);

	return res.json();
};

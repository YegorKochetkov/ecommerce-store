import { Category } from '@/types';

const categoriesUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
	const res = await fetch(categoriesUrl);

	return res.json();
};

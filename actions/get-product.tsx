import { Product } from '@/types';

const productsUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (id: string): Promise<Product> => {
	const res = await fetch(`${productsUrl}/${id}`);

	return res.json();
};

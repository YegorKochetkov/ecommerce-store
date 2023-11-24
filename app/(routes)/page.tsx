import React from 'react';

import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import { getBillboard } from '@/actions/get-billboard';
import { getProducts } from '@/actions/get-products';

export const revalidate = 0;

const HomePage = async () => {
	const products = await getProducts({ isFeatured: true });
	const billboard = await getBillboard('5a923d9e-a49d-49d8-bbb7-121c1c2b20e7');

	return (
		<main className='py-8 px-4 sm:px-6 lg:px-8'>
			<div className='container m-auto grid gap-y-10'>
				<Billboard data={billboard} />
				<ProductList title='Featured Products' items={products} />
			</div>
		</main>
	);
};

export default HomePage;

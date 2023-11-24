import React from 'react';

import { getProduct } from '@/actions/get-product';
import { getProducts } from '@/actions/get-products';

import ProductList from '@/components/product-list';
import Gallery from '@/components/gallery';
import Info from '@/components/info';

const ProductPage = async ({ params }: { params: { productId: string } }) => {
	const product = await getProduct(params.productId);
	const suggestedProducts = (
		await getProducts({
			categoryId: product.category.id,
		})
	).filter((p) => p.id !== product.id);

	return (
		<main className='bg-white py-6 px-4 sm:px-6 sm:py-10 lg:px-8'>
			<div className='container mx-auto'>
				<section className='pb-10 sm:px-0'>
					<div
						className='flex flex-col-reverse sm:flex-col gap-y-4 lg:grid
              lg:grid-cols-[auto_1fr] lg:items-start sm:gap-x-8'
					>
						<Gallery images={product.images} productName={product.name} />
						<div className='px-4 sm:mt-10 sm:px-0 lg:mt-0'>
							<Info data={product} />
						</div>
					</div>
				</section>
				<hr className='mb-10' />
				<ProductList title='You may also like' items={suggestedProducts} />
			</div>
		</main>
	);
};

export default ProductPage;

import React from 'react';

import { getProducts } from '@/actions/get-products';
import { getColors } from '@/actions/get-colors';
import { getSizes } from '@/actions/get-sizes';
import { getCategory } from '@/actions/get-category';

import Billboard from '@/components/billboard';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';
import Filter from './components/filter';
import MobileFilters from './components/mobile-filters';

export const revalidate = 0;

const CategoryPage = async ({
	params,
	searchParams,
}: {
	params: { categoryId: string };
	searchParams: {
		colorId: string;
		sizeId: string;
	};
}) => {
	const products = await getProducts({
		categoryId: params.categoryId,
		colorId: searchParams.colorId,
		sizeId: searchParams.sizeId,
	});
	const sizes = await getSizes();
	const colors = await getColors();
	const category = await getCategory(params.categoryId);

	return (
		<main className='bg-white py-8 px-4 sm:px-6 lg:px-8'>
			<div className='container mx-auto'>
				<div className='mb-8'>
					<Billboard data={category.billboard} />
				</div>

				<div className='lg:hidden'>
					<MobileFilters sizes={sizes} colors={colors} />
				</div>

				<div
					className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
						lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center'
				>
					<div className='hidden lg:block'>
						<Filter valueKey='sizeId' filters={sizes} name='Sizes' />
						<Filter valueKey='colorId' filters={colors} name='Colors' />
					</div>

					{products.length === 0 ? (
						<div className='mt-8 col-span-3 xl:col-span-4'>
							<NoResults />
						</div>
					) : null}

					<div className='mt-6 lg:mt-0'>
						{products.map((product, index) => (
							<ProductCard
								key={product.id}
								data={product}
								appearDelay={index}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default CategoryPage;

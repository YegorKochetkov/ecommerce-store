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
		colorId: string | string[];
		sizeId: string | string[];
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
					className='grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6
						justify-items-center sm:justify-items-start'
				>
					<div className='hidden lg:block'>
						<Filter valueKey='sizeId' filters={sizes} name='Sizes' />
						<Filter valueKey='colorId' filters={colors} name='Colors' />
					</div>

					{products.length === 0 ? (
						<div className='mt-8 mx-auto'>
							<NoResults />
						</div>
					) : null}

					<div
						className='flex flex-row flex-wrap gap-3 mt-6 lg:mt-0
							justify-center sm:justify-start'
					>
						{products.map((product, index) => (
							<div
								key={product.id}
								className='max-w-xs basis-56 flex-shrink flex-grow'
							>
								<ProductCard
									key={product.id}
									data={product}
									appearDelay={index}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default CategoryPage;

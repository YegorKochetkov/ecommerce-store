'use client';

import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';

import Button from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';

const Summary = () => {
	const items = useCart((state) => state.items);
	const removeAll = useCart((state) => state.removeAll);
	const searchParams = useSearchParams();

	const totalPrice = items.reduce((totalSum, item) => {
		return totalSum + Number(item.price);
	}, 0);

	const onCheckOut = async () => {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}/checkout`,
			{
				productsIds: items.map((item) => item.id),
			},
		);

		window.location = response.data.url;
	};

	React.useEffect(() => {
		if (searchParams.get('success')) {
			toast.success('Payment completed.');
			removeAll();
		}

		if (searchParams.get('canceled')) {
			toast.error('Payment canceled.');
		}
	}, [searchParams, removeAll]);

	return (
		<section
			className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5
					lg:mt-0 lg:p-8'
		>
			<h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
			<div className='mt-6 space-y-4'>
				<div
					className='flex items-center justify-between border-t border-gray-200
					pt-4'
				>
					<div className='text-base font-medium text-gray-900'>Order total</div>
					<Currency value={totalPrice} />
				</div>
			</div>
			<Button className='w-full mt-6' onClick={onCheckOut}>
				Checkout
			</Button>
		</section>
	);
};

export default Summary;

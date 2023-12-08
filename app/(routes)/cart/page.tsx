'use client';

import React from 'react';

import useCart from '@/hooks/use-cart';
import CartItem from './components/cart-item';
import Summary from './components/summary';

const CartPage = () => {
	const [isMounted, setIsMounted] = React.useState(false);

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	const cart = useCart();

	if (!isMounted) {
		return null;
	}

	return (
		<main className='bg-white py-8 px-4 sm:px-6 lg:px-8'>
			<div className='container mx-auto'>
				<h1 className='text-3xl font-bold text-black'>Shopping Cart</h1>
				<div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
					<div className='lg:col-span-7'>
						{cart.items.length === 0 && <p>No items in the cart</p>}

						<ul>
							{cart.items.map((item, index) => (
								<li key={item.id}>
									<CartItem data={item} appearDelay={index} />
								</li>
							))}
						</ul>
					</div>
					<Summary />
				</div>
			</div>
		</main>
	);
};

export default CartPage;

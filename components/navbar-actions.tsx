'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';

import Button from '@/components/ui/button';
import useCart from '@/hooks/use-cart';

const NavbarActions = () => {
	const [isMounted, setIsMounted] = React.useState(false);

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	const cart = useCart();
	const router = useRouter();

	if (!isMounted) {
		return null;
	}

	return (
		<div className='flex items-center gap-4'>
			<Button onClick={() => router.push('/cart')}>
				<ShoppingBag size={20} color='white' />
				<span className='text-sm font-medium'>{cart.items.length}</span>
			</Button>
		</div>
	);
};

export default NavbarActions;

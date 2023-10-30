'use client';

import React from 'react';

import { currencyFormatter } from '@/lib/utils';

const Currency = ({ value }: { value: string | number }) => {
	const [isMounted, setIsMounted] = React.useState(false);

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<p className='font-semibold'>{currencyFormatter.format(Number(value))}</p>
	);
};

export default Currency;

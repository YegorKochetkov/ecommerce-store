'use client';

import React from 'react';
import queryString from 'query-string';

import { Color, Size } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Filter = ({
	valueKey,
	filters: values,
	name,
}: {
	valueKey: string;
	filters: (Color | Size)[];
	name: string;
}) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const selectedValue = searchParams.get(valueKey);

	const onClick = (id: string) => {
		const current = queryString.parse(searchParams.toString());
		const query = {
			...current,
			[valueKey]: id,
		};

		if (current[valueKey] === id) {
			query[valueKey] = null;
		}

		const url = queryString.stringifyUrl(
			{
				url: window.location.href,
				query,
			},
			{ skipNull: true },
		);

		router.push(url);
	};

	return (
		<div className='mb-8'>
			<h3 className='text-lg font-semibold'>{name}</h3>
			<hr className='mt-2 mb-4' />
			<ul className='flex flex-wrap gap-2'>
				{values.map((filter) => (
					<li key={filter.id} className='flex items-center'>
						<Button
							className={cn(
								'rounded-md text-sm text-gray-800 p-2 bg-white capitalize',
								'border border-gray-300',
								selectedValue === filter.id ? 'bg-black text-white' : '',
							)}
							onClick={() => onClick(filter.id)}
						>
							{filter.name}
						</Button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Filter;

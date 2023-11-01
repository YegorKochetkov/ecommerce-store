'use client';

import React from 'react';
import { Dialog } from '@headlessui/react';
import { Plus, X } from 'lucide-react';

import { Size, Color } from '@/types';

import Button from '@/components/ui/button';
import IconButton from '@/components/ui/icon-button';
import Filter from './filter';

const MobileFilters = ({
	sizes,
	colors,
}: {
	sizes: Size[];
	colors: Color[];
}) => {
	const [open, setOpen] = React.useState(false);
	const onOpen = () => setOpen(true);
	const onClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={onOpen} className='flex items-center gap-x-2'>
				Filters
				<Plus size={20} />
			</Button>

			<Dialog
				as='div'
				open={open}
				onClose={onClose}
				className='relative z-40 lg:hidden'
			>
				<div className='fixed inset-0 bg-black/30' aria-hidden='true' />
				<div className='fixed inset-0 z-40 flex'>
					<Dialog.Panel
						className='relative ml-auto flex h-full w-full max-w-xs flex-col
							overflow-y-auto bg-white py-4 pb-6 shadow-xl'
					>
						<div className='flex items-center justify-end px-4'>
							<IconButton icon={<X size={15} />} onClick={onClose} />
						</div>

						<div className='p-4'>
							<Filter valueKey='sizeId' filters={sizes} name='Size' />
							<Filter valueKey='colorId' filters={colors} name='Color' />
						</div>
					</Dialog.Panel>
				</div>
			</Dialog>
		</div>
	);
};

export default MobileFilters;

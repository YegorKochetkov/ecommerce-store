import React from 'react';
import Image from 'next/image';
import { Tab } from '@headlessui/react';

import { cn } from '@/lib/utils';
import { Image as ImageType } from '@/types';

const GalleryTab = ({
	image,
	imageAlt,
}: {
	image: ImageType;
	imageAlt: string;
}) => {
	return (
		<Tab
			className='relative flex aspect-square cursor-pointer items-center
        justify-center rounded-md bg-white'
		>
			{({ selected }) => (
				<div>
					<span>
						<Image
							src={image.url}
							alt={imageAlt}
							width={500}
							height={500}
							className='object-cover object-center'
						/>
					</span>
					<span
						className={cn(
							'absolute inset-0 rounded-md ring-2 ring-offset-2',
							selected ? 'ring-gray-700' : 'ring-transparent',
						)}
					/>
				</div>
			)}
		</Tab>
	);
};

export default GalleryTab;

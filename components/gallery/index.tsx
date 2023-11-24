'use client';

import React from 'react';
import Image from 'next/image';
import { Tab } from '@headlessui/react';

import { Image as ImageType } from '@/types';

import GalleryTab from '@/components/gallery/gallery-tab';

const Gallery = ({
	images,
	productName,
}: {
	images: ImageType[];
	productName: string;
}) => {
	return (
		<Tab.Group as='div' className='flex flex-col-reverse max-w-lg'>
			<div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
				<Tab.List className='grid grid-cols-4 gap-6'>
					{images.map((image) => (
						<GalleryTab key={image.id} image={image} imageAlt={productName} />
					))}
				</Tab.List>
			</div>
			<div className='space-y-4 sm:space-y-0'>
				{images.map((image) => (
					<React.Fragment key={image.id}>
						<Tab.Panels>
							<Tab.Panel>
								<Image
									src={image.url}
									alt={productName}
									width={500}
									height={500}
									className='aspect-square relative h-full w-full sm:rounded-lg
										overflow-hidden object-cover object-center hidden sm:block'
								/>
							</Tab.Panel>
						</Tab.Panels>
						<Image
							src={image.url}
							alt={productName}
							width={500}
							height={500}
							className='aspect-square relative h-full w-full sm:rounded-lg
								overflow-hidden object-cover object-center sm:hidden'
						/>
					</React.Fragment>
				))}
			</div>
		</Tab.Group>
	);
};

export default Gallery;

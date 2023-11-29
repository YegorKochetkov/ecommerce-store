'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Expand, ShoppingCart } from 'lucide-react';

import { Product } from '@/types';
import usePreviewModal from '@/hooks/use-preview-modal';
import IconButton from '@/components/ui/icon-button';
import Currency from '@/components/ui/currency';

const ProductCard = ({
	data,
	appearDelay = 0,
}: {
	data: Product;
	appearDelay?: number;
}) => {
	const boundingRef = React.useRef<DOMRect | null>(null);
	const router = useRouter();
	const previewModal = usePreviewModal();
	const handleMouseMove = (ev: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (!boundingRef.current) return;

		const x = ev.clientX - boundingRef.current.left;
		const y = ev.clientY - boundingRef.current.top;
		const xPercentage = x / boundingRef.current.width;
		const yPercentage = y / boundingRef.current.height;
		const xRotation = (xPercentage - 0.5) * 20;
		const yRotation = (0.5 - yPercentage) * 20;

		ev.currentTarget.style.setProperty('--x-rotation', `${yRotation}deg`);
		ev.currentTarget.style.setProperty('--y-rotation', `${xRotation}deg`);
		ev.currentTarget.style.setProperty('--x', `${xPercentage * 80}%`);
		ev.currentTarget.style.setProperty('--y', `${yPercentage * 60}%`);
	};
	const handleClick = () => {
		router.push(`/product/${data.id}`);
	};

	const onPreview: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();
		previewModal.onOpen(data);
	};

	return (
		<div
			className='[perspective:800px] max-w-lg animate-card opacity-0'
			style={{ animationDelay: `${appearDelay * 0.1}s` }}
			onClick={handleClick}
		>
			<article
				onMouseLeave={() => {
					boundingRef.current = null;
				}}
				onMouseEnter={(ev) => {
					boundingRef.current = ev.currentTarget.getBoundingClientRect();
				}}
				onMouseMove={(ev) => handleMouseMove(ev)}
				className='bg-white group cursor-pointer rounded-xl border p-3
					space-y-4	relative overflow-hidden card-hover-3d-effect'
			>
				<div className='rounded-xl aspect-square bg-gray-100 relative'>
					<Image
						src={data.images[0].url}
						alt={data.name}
						width={500}
						height={500}
						className='object-cover aspect-square rounded-md'
					/>
					<div
						className='opacity-0 group-hover:opacity-100 flex justify-center
							transition absolute px-6 bottom-5 w-full gap-4 z-10'
					>
						<IconButton
							onClick={onPreview}
							icon={<Expand size={20} className='text-gray-600' />}
						/>
						<IconButton
							onClick={() => {}}
							icon={<ShoppingCart size={20} className='text-gray-600' />}
						/>
					</div>
				</div>
				<div>
					<h3 className='font-semibold text-lg'>{data.name}</h3>
					<p className='text-sm text-gray-500'>{data.category.name}</p>
				</div>
				<Currency value={data.price} />
			</article>
		</div>
	);
};

export default ProductCard;

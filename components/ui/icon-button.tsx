import React from 'react';

import { cn } from '@/lib/utils';

const IconButton = ({
	onClick,
	icon,
	className,
}: {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	icon: React.ReactNode;
	className?: string;
}) => {
	return (
		<button
			type='button'
			name='product_control'
			onClick={onClick}
			className={cn(
				'rounded-full flex items-center justify-center bg-white border p-2',
				'shadow-md bg-opacity-70 hover:scale-110 hover:bg-opacity-100 transition',
				'active:scale-95',
				className,
			)}
		>
			{icon}
		</button>
	);
};

export default IconButton;

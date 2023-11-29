'use client';

import { Fragment } from 'react';
import { X } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';

import IconButton from '@/components/ui/icon-button';

const Modal = ({
	open,
	onClose,
	children,
}: {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
}) => {
	return (
		<Transition show={open} appear as={Fragment}>
			<Dialog as='div' onClose={onClose} className='relative z-50'>
				<div className='fixed inset-0 bg-black/30' />

				<div className='fixed inset-0 overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center p-4 text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel
								className='w-full max-w-3xl overflow-hidden rounded-lg
									text-left align-middle'
							>
								<div
									className='relative flex w-full items-center overflow-hidden
										bg-white px-4 py-8 shadow-2xl sm:px-6 sm:pt-10
										md:p-6 lg:p-8'
								>
									<div className='absolute right-3 top-3'>
										<IconButton onClick={onClose} icon={<X size={15} />} />
									</div>
									{children}
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default Modal;

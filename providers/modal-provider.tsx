'use client';

import React from 'react';

import PreviewModal from '@/components/preview-modal';

const ModalProvider = () => {
	const [isMounted, setIsMounted] = React.useState(false);

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return <PreviewModal />;
};

export default ModalProvider;

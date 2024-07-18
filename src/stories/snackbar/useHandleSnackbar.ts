import { useCallback, useState } from 'react';

export function useHandleSnackbar(duration: number) {
	const [isOpen, setIsOpen] = useState(false);

	const openSnackbar = useCallback(() => {
		setIsOpen(true);

		const timer = setTimeout(() => {
			setIsOpen(false);
		}, duration);

		return () => clearTimeout(timer);
	}, [duration]);

	return { isOpen, openSnackbar };
}

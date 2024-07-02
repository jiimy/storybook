import { forwardRef } from 'react';

type TagCloseButtonProps = {
	onClick: () => void;
};

export const TagCloseButton = forwardRef<
	HTMLButtonElement,
	TagCloseButtonProps
>(function TagCloseButton({ onClick }, ref) {
	return (
		<button type='button' ref={ref} onClick={() => onClick()}>
			x
		</button>
	);
});

TagCloseButton.displayName = 'TagCloseButton';

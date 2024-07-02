import { forwardRef } from 'react';

type TagIconProps = {
	children: React.ReactNode;
};

export const TagIcon = forwardRef<HTMLSpanElement, TagIconProps>(
	function TagIcon({ children }, ref) {
		return <span ref={ref}>{children}</span>;
	},
);

TagIcon.displayName = 'TagIcon';

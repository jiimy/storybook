import { forwardRef } from 'react';

type TagLabelProps = {
	children: React.ReactNode;
};

export const TagLabel = forwardRef<HTMLSpanElement, TagLabelProps>(
	function TagLabel({ children }, ref) {
		return <span ref={ref}>{children}</span>;
	},
);

TagLabel.displayName = 'TagLabel';

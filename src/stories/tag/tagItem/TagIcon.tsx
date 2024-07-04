import { forwardRef } from 'react';

export type TagIconProps = {
	icon: React.ReactNode;
};

export const TagIcon = forwardRef<HTMLSpanElement, TagIconProps>(
	(props, ref) => {
		return (
			<span ref={ref} {...props}>
				{props.icon}
			</span>
		);
	},
);

TagIcon.displayName = 'TagIcon';

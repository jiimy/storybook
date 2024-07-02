import { forwardRef } from 'react';
import s from './tag.module.scss';

type TagWrapperProps = {
	color?: 'red' | 'blue' | 'green' | 'yellow' | 'black' | 'white';
	readonly?: boolean;
	rounded?: boolean;
	size?: 'lg' | 'sm';
	children?: React.ReactNode;
};

export const TagWrapper = forwardRef<HTMLSpanElement, TagWrapperProps>(
	function TagWrapper({ ...props }, ref) {
		return <span ref={ref} {...props} className={s.tag} />;
	},
);

TagWrapper.displayName = 'TagWrapper';

import { forwardRef } from 'react';
import s from './tag.module.scss';

type TagProps = {
	color?: 'red' | 'blue' | 'green' | 'yellow' | 'black' | 'white';
	readonly?: boolean;
	rounded?: boolean;
	size?: 'lg' | 'sm';
	children?: React.ReactNode;
};

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
	({ ...props }, ref) => {
		return <span ref={ref} {...props} className={s.tag} />;
	},
);

Tag.displayName = 'Tag';

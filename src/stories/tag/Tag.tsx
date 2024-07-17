import { forwardRef } from 'react';
import s from './tag.module.scss';
import styled from 'styled-components';

export type TagProps = {
	closable?: boolean;
	rounded?: boolean;
	size?: 'lg' | 'md' | 'sm';
	children?: React.ReactNode;
	onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
	renderClose?: React.ReactNode;
};

const StyledTag = styled.span<TagProps>`
	border-radius: ${({ rounded }) => (rounded ? '50px' : '0px')};

	padding: ${({ size }) => {
		switch (size) {
			case 'sm':
				return '0.25em 0.5em';
			case 'md':
				return '0.5em 0.75em';
			default:
				return '0.75em 1em';
		}
	}};

	font-size: ${({ size }) => {
		switch (size) {
			case 'sm':
				return '12px';
			case 'md':
				return '16px';
			default:
				return '18px';
		}
	}};
`;

const Tag = forwardRef<HTMLSpanElement, TagProps>(({ ...props }, ref) => {
	const closeButton = props.closable && (
		<>
			{props.renderClose ?? (
				<button className={s.close} onClick={props.onClose}>
					x
				</button>
			)}
		</>
	);
	return (
		<StyledTag ref={ref} {...props} className={`${s.tag} ${props.className}`}>
			{props.children}
			{closeButton}
		</StyledTag>
	);
});

Tag.displayName = 'Tag';
export default Tag;

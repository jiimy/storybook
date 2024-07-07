import { forwardRef } from 'react';
import s from './tag.module.scss';
import styled, { css } from 'styled-components';

export type TagProps = {
  closable?: boolean;
  rounded?: boolean;
  size?: 'lg' | 'sm';
  children?: React.ReactNode;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const sizeStyles = {
  sm: css`
		padding: 5px 10px;
		font-size: 12px;
	`,
  lg: css`
		padding: 15px 20px;
		font-size: 18px;
	`,
};

const StyledTag = styled.span<{
  rounded?: boolean;
  size?: 'sm' | 'lg';
}>`
	border-radius: ${({ rounded }) => (rounded ? '50px' : '0px')};
	${({ size }) => size && sizeStyles[size]}
`;

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ ...props }, ref) => {
    const closeButton = props.closable && (
      <button className={s.close} onClick={props.onClose}>
        x
      </button>
    );
    return (
      <StyledTag ref={ref} {...props} className={s.tag}>
        {props.children}
        {closeButton}
      </StyledTag>
    );
  },
);

Tag.displayName = 'Tag';

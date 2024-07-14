import React from 'react';
import s from './button.module.scss';
import styled, { css } from 'styled-components';

type ButtonProps = {
  theme?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: any;
  full?: boolean;
  className?: string;
  onClick?: () => void;
}


const ButtonStyle = styled.button<ButtonProps>`
  ${props => props.full && css`
    width: 100%;
    text-align: center;
  `}

  ${props => props.theme === 'primary' && css`
    background: var(--sw-primary-color);
    color: var(--sw-white);
  `}
  ${props => props.theme === 'secondary' && css`
    background: var(--sw-secondary-color);
    color: var(--sw-white);
  `}

  ${props => props.size === 'small' && css`
    font-size: var(--sw-small-font-size);
    padding: var(--sw-small-padding);
  `}
  ${props => props.size === 'medium' && css`
    font-size: var(--sw-medium-font-size);
    padding: var(--sw-medium-padding);
  `}
  ${props => props.size === 'large' && css`
    font-size: var(--sw-large-font-size);
    padding: var(--sw-large-padding);
  `}
`
/**
 * 
 */
const Button = ({
  theme = 'primary',
  size = 'medium',
  onClick,
  full,
  className,
  children
}: ButtonProps) => {
  return (
    <ButtonStyle
      type="button"
      theme={theme}
      size={size}
      full={full}
      onClick={onClick}
      className={`${s.button} ${className}`}
    >
      {children}
    </ButtonStyle>
  );
};

// 테스트
export default Button;
export type { ButtonProps }
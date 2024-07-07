import React from 'react';
import s from './button.module.scss';
import styled, { css } from 'styled-components';

type ButtonProps = {
  theme?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: any;
  className?: string;
  onClick?: () => void;
}


const ButtonStyle = styled.button<ButtonProps>`
  ${props => props.theme === 'primary' && css`
    background: var(--primary-color);
  `}
  ${props => props.size === 'small' && css`
    font-size: 12px;
    padding: 10px 16px;
  `}
`
/**
 * Primary UI component for user interaction
 */
const Button = ({
  theme = 'primary',
  size = 'medium',
  onClick,
  className,
  children
}: ButtonProps) => {
  return (
    <ButtonStyle
      type="button"
      theme={theme}
      size={size}
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
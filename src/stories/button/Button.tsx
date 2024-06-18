import React from 'react';
import s from './button.module.scss';
import styled, { css } from 'styled-components';

type ButtonProps = {
  theme?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: any;
  onClick?: () => void;
}

const ButtonStyle = styled.button<ButtonProps>`
  ${props => props.theme === 'primary' && css`
    background: blue;
  `}
  ${props => props.size === 'small' && css`
      font-size: 12px;
      padding: 10px 16px;
  `}
`

const Button = ({
  theme = 'primary',
  size = 'medium',
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyle
      type="button"
      className={s.button}
      {...props}
      // theme={theme}
      // size={size}
    >
      {children}
    </ButtonStyle>
  );
};

// 테스트
export default Button;
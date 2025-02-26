import React from 'react';
import s from './button.module.scss';
import styled, { css } from 'styled-components';
import classNames from 'classnames';

type ButtonProps = {
  theme?: 'primary' | 'secondary' | 'vijob';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  full?: boolean;
  className?: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonStyle = styled.button<ButtonProps>`
  ${props => props.full && css`
    width: 100%;
    text-align: center;
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

  ${props => props.theme === 'primary' && css`
    background: var(--sw-primary-color);
    color: var(--sw-white);
  `}
  ${props => props.theme === 'secondary' && css`
    background: var(--sw-secondary-color);
    color: var(--sw-white);
  `}
`
/**
 * 
 */

// 태그에 기본으로 정의되어 있는 theme나 size같은 타입을 줄 수있어야 한다.
// 그 타입을 자동완성도 시켜주고 props를 전달하기 위해서 css in js를 사용. 
// 만약 css로 한다면 자동완성도 되지 않고, class명으로만 구분해야한다.
const Button = ({
  theme = 'primary',
  size = 'medium',
  onClick,
  full,
  className,
  children,
  // ...attr
}: ButtonProps) => {
  return (
    <ButtonStyle
      theme={theme}
      size={size}
      full={full}
      onClick={onClick}
      // className={${s.button}`}
      className={classNames(s.button, className)}
    // {...attr}
    >
      {children}
    </ButtonStyle>
  );
};

// 테스트
export default Button;
export type { ButtonProps }
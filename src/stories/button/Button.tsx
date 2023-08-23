import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  children: any;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  children,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};

// 테스트

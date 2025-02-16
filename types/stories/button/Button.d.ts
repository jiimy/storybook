import React from 'react';
type ButtonProps = {
    theme?: 'primary' | 'secondary' | 'vijob';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
    full?: boolean;
    className?: string;
    onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
/**
 *
 */
declare const Button: ({ theme, size, onClick, full, className, children, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
export type { ButtonProps };

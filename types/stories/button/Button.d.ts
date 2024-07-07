type ButtonProps = {
    theme?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    children: any;
    className?: string;
    onClick?: () => void;
};
/**
 * Primary UI component for user interaction
 */
declare const Button: ({ theme, size, onClick, className, children }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
export type { ButtonProps };

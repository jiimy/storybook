type ButtonProps = {
    theme?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    children: any;
    full?: boolean;
    className?: string;
    onClick?: () => void;
};
/**
 *
 */
declare const Button: ({ theme, size, onClick, full, className, children }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
export type { ButtonProps };

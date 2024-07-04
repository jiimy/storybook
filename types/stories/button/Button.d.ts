type ButtonProps = {
    theme?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    children: any;
    onClick?: () => void;
};
declare const Button: ({ theme, size, onClick, children }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
export type { ButtonProps };

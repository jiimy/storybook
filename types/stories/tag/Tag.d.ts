/// <reference types="react" />
export type TagProps = {
    closable?: boolean;
    rounded?: boolean;
    size?: 'lg' | 'md' | 'sm';
    children?: React.ReactNode;
    onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    renderClose?: React.ReactNode;
};
declare const Tag: import("react").ForwardRefExoticComponent<TagProps & import("react").RefAttributes<HTMLSpanElement>>;
export default Tag;

/// <reference types="react" />
type TagProps = {
    closable?: boolean;
    rounded?: boolean;
    size?: 'lg' | 'sm';
    children?: React.ReactNode;
    onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export declare const Tag: import("react").ForwardRefExoticComponent<TagProps & import("react").RefAttributes<HTMLSpanElement>>;
export {};

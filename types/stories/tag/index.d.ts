/// <reference types="react" />
declare const Tag: import("react").ForwardRefExoticComponent<{
    closable?: boolean | undefined;
    rounded?: boolean | undefined;
    size?: "lg" | "sm" | undefined;
    children?: import("react").ReactNode;
    onClose?: ((e: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
} & import("react").RefAttributes<HTMLSpanElement>> & {
    Icon: import("react").ForwardRefExoticComponent<import("./tagItem/TagIcon").TagIconProps & import("react").RefAttributes<HTMLSpanElement>>;
};
export default Tag;

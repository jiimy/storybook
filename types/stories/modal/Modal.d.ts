/// <reference types="react" />
export declare const Modal: (({ children, setOnModal, onClose, isDim, zindex, dimClick, onClick, className }: {
    children: import("react").ReactNode;
    setOnModal: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    onClose?: boolean | undefined;
    isDim?: boolean | undefined;
    zindex?: number | undefined;
    dimClick?: boolean | undefined;
    onClick?: (() => {}) | undefined;
    className?: string | undefined;
}) => import("react/jsx-runtime").JSX.Element) & {
    Title: ({ children }: {
        children: import("react").ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Content: ({ children }: {
        children: import("react").ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Buttons: ({ children }: {
        children: import("react").ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
};

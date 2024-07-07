/// <reference types="react" />
export declare const Modal: (({ children, setOnModal, onClose, isDim, zindex, dimClick, onClick, className }: import("./ModalFrame").modalFrameType) => import("react/jsx-runtime").JSX.Element) & {
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

import React from "react";
type modalFrameType = {
    children: React.ReactNode;
    setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
    onClose?: boolean;
    isDim?: boolean;
    zindex?: number;
    dimClick?: boolean;
    onClick?: () => {};
    className?: string;
};
declare const ModalFrame: ({ children, setOnModal, onClose, isDim, zindex, dimClick, onClick, className }: modalFrameType) => import("react/jsx-runtime").JSX.Element;
export default ModalFrame;

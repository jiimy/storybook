import React from "react";
export type modalFrameType = {
    children: React.ReactNode;
    setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
    onClose?: boolean;
    isDim?: boolean;
    zindex?: number;
    dimClick?: boolean;
    onClick?: () => {};
    className?: string;
};
/**
 * <div id="modal"></div> 추가
 * react 일 경우 : public/index.html의 #root 다음으로,
 * next page router일 경우 : ㅁㅁ에 (TODO: 추후 추가) ,
 * next app router 일 경우 : app/layout.tsx의 <body></body> 안에
 */
declare const ModalFrame: ({ children, setOnModal, onClose, isDim, zindex, dimClick, onClick, className }: modalFrameType) => import("react/jsx-runtime").JSX.Element;
export default ModalFrame;

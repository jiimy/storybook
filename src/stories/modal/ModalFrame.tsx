// ModalFrame.tsx

import React from "react";
import ModalPortal from "./PortalModal";
import s from './modal.module.scss';

export type modalFrameType = {
  children: React.ReactNode;
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>,
  onClose?: boolean;
  isDim?: boolean;
  zindex?: number;
  dimClick?: boolean;
  onClick?: () => {};
  className?: string
}

/**
 * <div id="modal"></div> 추가 
 * react 일 경우 : public/index.html의 #root 다음으로, 
 * next page router일 경우 : ㅁㅁ에 (TODO: 추후 추가) , 
 * next app router 일 경우 : app/layout.tsx의 <body></body> 안에 
 */
const ModalFrame = ({
  children,
  setOnModal,
  onClose,
  isDim,
  zindex,
  dimClick,
  onClick,
  className
}: modalFrameType) => {
  return (
    <ModalPortal>
      <div className={`${s.modal} ${className}`} onClick={onClick}>
        <div className={s.modal_container}>
          <div className={s.modal_content}>
            {children}
            {onClose && (
              <div className={s.close} onClick={() => setOnModal(false)}>
                <span>닫기 아이콘</span>
              </div>
            )}
          </div>
        </div>
        {isDim && <div className={s.dim} onClick={() => (dimClick && setOnModal(false))}></div>}
      </div>
    </ModalPortal>
  );
};

export default ModalFrame;

import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import s from './toast.module.scss';
import { HideProgressBarStyle, ToastWrapperStyle } from './ToastStyle';

export type toastProps = {
  startDirection?: 'top-right' | 'top-center' | 'top-left' | 'bottom-left' | 'bottom-center' | 'bottom-right', // 보여지는 방향
  timer?: number, // 보여진 후 timer 시간 뒤 사라짐
  pauseOnHover?: boolean, // 마우스 오버일때만 timer 중지
  state?: 'error' | 'success' | 'warning',
  hideProgressBar?: boolean, // 진행 시간 바 
  children?: any,
  isOpen?: boolean,
  onClose?: boolean,
  className?: any
}
const ToastStyle = styled.div<toastProps>`
  transform: translateY(-10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  ${ToastWrapperStyle}:hover & {
    transition: none; /* 마우스 오버시에는 애니메이션 중지 */
  }

  ${ToastWrapperStyle} ${ToastWrapperStyle}:not(:hover) & {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  ${props => props.startDirection === 'top-center' && css`
    position: absolute;
    top: -100px; /* Starting position off-screen */
    left: 50%;
    transform: translateX(-50%);
    transition: top 0.3s ease-in-out;
  `}
`

export const ToastWrapper = ({ ...props }: toastProps) => {
  return (
    <ToastWrapperStyle {...props} className={s.toast_wrapper}>
      {props.children}
    </ToastWrapperStyle>
  )
}

/**
 * Toast 컴포넌트는 스택형으로 쌓이기 때문에 감싸는 영역인 ToastWrapper 가 필수적으로 필요합니다. root에 감싸주면 매번 추가할 필요가 없습니다.
 * <br/><br/>
 * 위-센터 -> 위에서 시작. 위-양쪽 -> 양쪽에서 시작 
 * <br/>
 * 아래-센터 -> 아래에서 시작, 위-양쪽 -> 양쪽에서 시작
 */
const Toast = ({ startDirection = 'top-right', timer = 300, hideProgressBar = false, className, children, state, isOpen, onClose, ...props }: toastProps) => {
  // const [visible, setVisible] = useState(true);
  // const [visible, setVisible] = useState(props.isOpen);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isOpen) {
      timeoutId = setTimeout(() => {
        // onClose(true)
      }, timer);
    }
    return () => clearTimeout(timeoutId);
  }, [isOpen, timer, onClose]);

  return (
    <ToastStyle {...props} startDirection={startDirection} timer={timer} className={`${className} ${s.toast}`}>
      {children}
      {!hideProgressBar && <HideProgressBarStyle timer={timer} state={state} className={s.progressbar} />}
    </ToastStyle>
  );
};

export default Toast;
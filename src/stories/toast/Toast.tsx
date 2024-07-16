import React from 'react';
import styled, { css } from 'styled-components';
import s from './toast.module.scss';

type toastProps = {
  startDirection?: 'top-right' | 'top-center' | 'top-left' | 'bottom-left' | 'bottom-center' | 'bottom-right', // 보여지는 방향
  timer?: number, // 보여진 후 timer 시간 뒤 사라짐
  pauseOnHover?: boolean, // 마우스 오버일때만 timer 중지
  onClose?: boolean, // 수동 닫기 버튼 on/off
  state?: 'error' | 'success' | 'warning',
  hideProgressBar?: boolean, // 진행 시간 바 
  children: any,
  className?: any
}

const ToastWrapperStyle = styled.div<toastProps>`
  ${props => props.startDirection === 'top-left' && css`
    place-content: flex-start;
  `}
  ${props => props.startDirection === 'top-center' && css`
    place-content: center;
  `}
  ${props => props.startDirection === 'top-right' && css`
    place-content: flex-end;
  `}

  ${props => props.startDirection === 'bottom-left' && css`
    align-items: end;
  `}
  ${props => props.startDirection === 'bottom-center' && css`
    place-content: center;
    align-items: end;
  `}
  ${props => props.startDirection === 'bottom-right' && css`
    justify-content: flex-end;
    align-items: end;
  `}
`
// const HideProgressBarStyle = styled.div<{ timer: number, state: string }>`
const HideProgressBarStyle = styled.div<{ timer: number, state?: string }>`
  width: 100%;
  height: 4px;
  background: ${({ state }) => `var(--sw-${state}-color)`};
  ${props => props.state === 'success' && css`
    background: red;
  `}
`

const ToastStyle = styled.div<toastProps>`
  
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
 * 위-센터 -> 위에서 시작. 위-양쪽 -> 양쪽에서 시작 
 * 아래-센터 -> 아래에서 시작, 위-양쪽 -> 양쪽에서 시작
 */
const Toast = ({ startDirection = 'top-right', timer = 300, hideProgressBar = false, className, children, ...props }: toastProps) => {
  return (
    <ToastStyle {...props} startDirection={startDirection} timer={timer} className={`${className} ${s.toast}`}>
      {children}
      {!hideProgressBar && <HideProgressBarStyle timer={timer} state={props.state} />}
    </ToastStyle>
  );
};

export default Toast;
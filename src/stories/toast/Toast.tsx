import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import s from './toast.module.scss';
import { HideProgressBarStyle, ToastWrapperStyle } from './ToastStyle';
import { updownMotion } from '../../styles/animation';

export type toastProps = {
  startDirection?: 'top-right' | 'top-center' | 'top-left' | 'bottom-left' | 'bottom-center' | 'bottom-right', // 보여지는 방향
  timer?: number, // 보여진 후 timer 시간 뒤 사라짐
  duration?: number, // 올라가는 시간, 내려가는 시간
  pauseOnHover?: boolean, // 마우스 오버일때만 timer 중지
  state?: 'error' | 'success' | 'warning',
  hideProgressBar?: boolean, // 진행 시간 바 
  children?: React.ReactNode,
  // onClose?: React.Dispatch<React.SetStateAction<boolean>>,
  onClose?: any; // TODO: any 수정하기
  className?: string
}

const FadeIn = () => keyframes`
 from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
`

const FadeOut = () => keyframes`
from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
`

const positionType = (startDirection: any, timer: any) => {
  switch (startDirection) {
    case "top-center":
      return css
        `${FadeIn} 0.2s, ${FadeOut} 0.2s ${timer / 1000}s forwards;`
    case "blue":
      return css
        `${FadeIn} 0.5s, ${FadeOut} 0.5s 2.5s`
    case "gray":
      return css
        `${FadeIn} 0.5s, ${FadeOut} 0.5s 2.5s`
    default:
      return null;
  }
}


// const ToastStyle = styled.div<{ startDirection : string, timer: any}>`
const ToastStyle = styled.div<toastProps>`
visibility: visible;
animation: ${({ startDirection, timer }) => positionType(startDirection, timer)};
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
const Toast = ({
  startDirection = 'top-center',
  timer = 3000,
  duration = 200,
  hideProgressBar = false,
  className,
  children,
  state = 'success',
  onClose,
  ...props
}: toastProps) => {
  const [visible, setVisible] = useState(true);
  const [clickcount, setClickCount] = useState([]);

  useEffect(() => {
    console.log('여는 이벤트 발생');
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    timeoutId = setTimeout(() => {
      onClose(false);
      // setVisible(false);
      onClose(false);
    }, timer + duration);
    return () => clearTimeout(timeoutId);
  }, [timer, onClose]);

  return (
    <ToastStyle {...props} startDirection={startDirection} timer={timer} className={`${className} ${s.toast}`}>
      {children}
      {onClose && <div onClick={() => { setVisible(false); onClose(); }}>닫기</div>}
      {!hideProgressBar && <HideProgressBarStyle timer={timer} state={state} className={s.progressbar} />}
    </ToastStyle>
  );
};

export default Toast;
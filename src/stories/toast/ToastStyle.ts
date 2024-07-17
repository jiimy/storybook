import styled, { css, keyframes } from "styled-components";
import { toastProps } from "./Toast";

export const ToastWrapperStyle = styled.div<toastProps>`
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

const progressAnimation = (timer: number) => keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const HideProgressBarStyle = styled.div<{ state?: string, timer: number }>`
  width: 100%;
  height: 4px;
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    background: ${({ state }) => `var(--sw-${state}-color)`};
    animation: ${({ timer }) => progressAnimation(timer)} ${({ timer }) => timer / 1000}s forwards;
    content:'';
  }
`
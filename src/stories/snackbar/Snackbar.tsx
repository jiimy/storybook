import { useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import s from './snackbar.module.scss';

interface snackbarWrapperProps {
  position?: 'top-center' | 'bottom-center';
  children: React.ReactNode;
  className?: string;
}
interface snackbarItemProps extends snackbarWrapperProps {
  open?: boolean;
  timer?: number; // n초뒤 사라짐.
  onClose: () => void | undefined;
  isClose?: boolean,

}

const SnackbarWrapperStyle = styled.div<{ position: snackbarWrapperProps['position'] }>`
  ${(props) => props.position === 'top-center' && css`
    flex-direction: column-reverse;
    align-items: center;
    justify-content: start;
  `}
  ${(props) => props.position === 'bottom-center' && css`
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  `}
`

export const SnackbarWrapper = ({ children, position = 'bottom-center', className }: snackbarWrapperProps) => {
  return (
    <SnackbarWrapperStyle position={position} className={`${s.snackbar} ${className}`}>{children}</SnackbarWrapperStyle>
  )
};

const slideInTop = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const slideOutTop = keyframes`
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-20px); opacity: 0; }
`;

const slideInBottom = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const slideOutBottom = keyframes`
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(20px); opacity: 0; }
`;

const SnackbarStyle = styled.div<snackbarWrapperProps & { open: boolean }>`
	opacity: ${({ open }) => (open ? 1 : 0)};
	animation: ${({ open, position }) => {
    if (position?.includes('top')) {
      return open ? slideInTop : slideOutTop;
    } else {
      return open ? slideInBottom : slideOutBottom;
    }
  }}
		0.3s ease-in-out;
	transition: opacity 0.3s ease-in-out;
`;

const Snackbar = ({
  children,
  open = false,
  timer = 0,
  position = 'bottom-center',
  isClose = false,
  onClose,
  className
}: snackbarItemProps) => {

  useEffect(() => {
    if (timer !== 0) {
      const showTimer = setTimeout(() => {
        onClose()
      }, timer);
      return () => clearTimeout(showTimer);
    }
  }, [open, timer])

  return (
    <>
      <SnackbarStyle className={`${s.snackbar_item} ${className}`} position={position} open={open}>
        {children}
        {isClose && <div className={s.close} onClick={() => onClose()}>닫기</div>}
      </SnackbarStyle>
    </>
  );
};

export default Snackbar;

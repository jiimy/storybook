import s from './snackbar.module.scss';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import {
	SnackbarAction,
	SnackbarDescription,
	SnackbarImage,
} from './SnackbarItem';
import { useEffect, useState } from 'react';

type SnackbarProps = {
	open?: boolean;
	position?: 'tl' | 'tc' | 'tr' | 'bl' | 'bc' | 'br';
	children?: React.ReactNode | string;
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

const SnackbarContainer = styled.div<SnackbarProps & { visible: boolean }>`
	${({ position }) => {
		switch (position) {
			case 'tl':
				return 'top: 20px; left: 20px;';
			case 'tc':
				return 'top: 20px; left: 50%;';
			case 'tr':
				return 'top: 20px; right: 20px;';
			case 'bl':
				return 'bottom: 20px; left: 20px;';
			case 'bc':
				return 'bottom: 20px; left: 50%;';
			case 'br':
				return 'bottom: 20px; right: 20px;';
			default:
				return 'bottom: 20px; left: 50%;';
		}
	}}
	opacity: ${({ visible }) => (visible ? 1 : 0)};
	animation: ${({ visible, position }) => {
			if (position?.startsWith('t')) {
				return visible ? slideInTop : slideOutTop;
			} else {
				return visible ? slideInBottom : slideOutBottom;
			}
		}}
		0.3s ease-in-out;
	transition: opacity 0.3s ease-in-out;
`;

export const SnackbarRoot = (props: SnackbarProps) => {
	const { open, position = 'br', children } = props;
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		if (open) {
			const showTimer = setTimeout(() => setIsVisible(true), 200);
			return () => clearTimeout(showTimer);
		} else {
			const hideTimer = setTimeout(() => setIsVisible(false), 500);
			return () => clearTimeout(hideTimer);
		}
	}, [open]);

	if (!isVisible) {
		return null;
	}

	return ReactDOM.createPortal(
		<SnackbarContainer
			className={s.snackbar}
			position={position}
			visible={isVisible && open!}
		>
			{children}
		</SnackbarContainer>,
		document.body,
	);
};

const Snackbar = Object.assign(SnackbarRoot, {
	Image: SnackbarImage,
	Description: SnackbarDescription,
	Action: SnackbarAction,
});

export default Snackbar;

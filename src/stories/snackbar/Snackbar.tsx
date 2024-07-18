import s from './snackbar.module.scss';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
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
	duration?: number;
	visible?: boolean;
};

const SnackbarContainer = styled.div<SnackbarProps>`
	${({ position }) => {
		switch (position) {
			case 'tl':
				return 'top: 20px; left: 20px;';
			case 'tc':
				return 'top: 20px; left: 50%; transform: translateX(-50%);';
			case 'tr':
				return 'top: 20px; right: 20px;';
			case 'bl':
				return 'bottom: 20px; left: 20px;';
			case 'bc':
				return 'bottom: 20px; left: 50%; transform: translateX(-50%);';
			case 'br':
				return 'bottom: 20px; right: 20px;';
		}
	}}
	opacity: ${({ visible }) => (visible ? 1 : 0)};
	transform: ${({ visible }) =>
		visible ? 'translateY(0)' : 'translateY(20px)'};
`;

export const SnackbarRoot = (props: SnackbarProps) => {
	const { open, position = 'br', duration = 3000, children } = props;
	const [isVisible, setIsVisible] = useState(false);
	const [isMount, setIsMount] = useState(open);

	useEffect(() => {
		if (open) {
			setIsMount(true);
			const showTimer = setTimeout(() => setIsVisible(true), 100);
			const hideTimer = setTimeout(() => setIsVisible(false), duration);
			const unMountTimer = setTimeout(() => setIsMount(false), 300);

			return () => {
				clearTimeout(showTimer);
				clearTimeout(hideTimer);
				clearTimeout(unMountTimer);
			};
		}
	}, [open, duration]);

	if (!open) {
		return null;
	}

	return ReactDOM.createPortal(
		<SnackbarContainer
			className={s.snackbar}
			position={position}
			open={isMount}
			visible={isVisible}
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

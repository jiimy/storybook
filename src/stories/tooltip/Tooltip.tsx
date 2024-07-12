import { forwardRef } from 'react';
import s from './tooltip.module.scss';
import styled, { css } from 'styled-components';

export type TooltipProps = {
	position?: 'top' | 'bottom' | 'right' | 'left';
	children?: React.ReactNode;
	content?: React.ReactNode;
};

const positionStyles = {
	top: css`
		bottom: 125%;
		left: 50%;
		transform: translateX(-50%);
	`,
	bottom: css`
		top: 125%;
		left: 50%;
		transform: translateX(-50%);
	`,
	left: css`
		top: 50%;
		right: 125%;
		transform: translateY(-50%);
	`,
	right: css`
		top: 50%;
		left: 125%;
		transform: translateY(-50%);
	`,
};

const TooltipContent = styled.div<{ position: TooltipProps['position'] }>`
	${({ position }) => position && positionStyles[position]}
`;

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
	const { children, position = 'bottom', content } = props;
	return (
		<div className={`${s.tooltip}`} ref={ref}>
			{children}
			<TooltipContent className={`${s.content}`} position={position}>
				{content}
			</TooltipContent>
		</div>
	);
});

Tooltip.displayName = 'Tooltip';
export default Tooltip;

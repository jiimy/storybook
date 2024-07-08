import styled from 'styled-components';
import { SwitchProps } from './Switch';
import s from './switch.module.scss';

export const SwitchThumb = styled.span.attrs<{
	size: SwitchProps['size'];
	checked: SwitchProps['checked'];
}>(({ checked, size }) => ({
	className: s.thumb,
	style: {
		left: checked
			? `calc(100% - ${size === 'sm' ? '0.9em' : size === 'md' ? '1.3em' : '1.5em'} - 0.1em)`
			: '0.1em',
		width: size === 'sm' ? '0.8em' : size === 'md' ? '1.2em' : '1.4em',
		height: size === 'sm' ? '0.8em' : size === 'md' ? '1.2em' : '1.4em',
	},
}))<SwitchProps>``;

SwitchThumb.displayName = 'SwitchThumb';

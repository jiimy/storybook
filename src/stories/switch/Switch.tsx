import React from 'react';
import styled from 'styled-components';
import SwitchInput from './SwitchInput';
import s from './switch.module.scss';

export type SwitchProps = {
	size?: 'sm' | 'md' | 'lg';
	checked?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	children?: React.ReactNode;
};

const SwitchWrapper = styled.label<{ size: SwitchProps['size'] }>`
	width: ${(props) =>
		props.size === 'sm' ? '2em' : props.size === 'md' ? '2.5em' : '3.2em'};
	height: ${(props) =>
		props.size === 'sm' ? '1em' : props.size === 'md' ? '1.4em' : '1.6em'};
`;

const SwitchSlider = styled.span<SwitchProps>`
	background-color: ${(props) => (props.checked ? '#000' : '#ccc')};
	border-radius: ${(props) =>
		props.size === 'sm' ? '0.5em' : props.size === 'md' ? '0.7em' : '0.8em'};
`;

export const Switch = (props: SwitchProps) => {
	const { size, checked, onChange } = props;
	return (
		<SwitchWrapper size={size} className={s.switch}>
			<SwitchInput checked={checked} onChange={onChange} />
			<SwitchSlider {...props} className={s.slider}>
				{props.children}
			</SwitchSlider>
		</SwitchWrapper>
	);
};

Switch.displayName = 'Switch';

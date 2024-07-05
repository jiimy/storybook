import React, { forwardRef } from 'react';
import s from './switch.module.scss';

type SwitchInputProps = {
	checked?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SwitchInput = forwardRef<HTMLInputElement, SwitchInputProps>(
	(props, ref) => {
		return <input type='checkbox' ref={ref} {...props} className={s.input} />;
	},
);

export default SwitchInput;

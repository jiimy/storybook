import type { Meta, StoryObj } from '@storybook/react';
import Switch from '.';
import { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';

const meta: Meta = {
	title: 'Component/Switch',
	tags: ['autodocs'],
	component: Switch,
};

export default meta;

export const Default: StoryObj<typeof Switch> = {
	render: function Render(args) {
		const [{ checked }, setArgs] = useArgs();
		const [isChecked, setIsChecked] = useState(checked ?? false);

		useEffect(() => {
			setIsChecked(!!checked);
		}, [checked]);

		const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
			action('onChange')(e.target.checked);
			setIsChecked(e.target.checked);
			setArgs({ checked: e.target.checked });
		};

		return (
			<Switch {...args} checked={isChecked} onChange={handleChecked}>
				<Switch.Thumb {...args} checked={isChecked} />
			</Switch>
		);
	},
};

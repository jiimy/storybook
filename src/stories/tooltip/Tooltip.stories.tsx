import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';

const meta: Meta = {
	title: 'Component/Tooltip',
	tags: ['autodocs'],
	component: Tooltip,
	decorators: [
		(Story) => (
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<Story />
			</div>
		),
	],
};

export default meta;

export const Default: StoryObj<typeof Tooltip> = {
	render: (args) => {
		return (
			<Tooltip {...args} content={<>Tooltip</>}>
				<div>Trigger</div>
			</Tooltip>
		);
	},
};

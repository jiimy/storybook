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
	args: {
		position: 'top',
		content: <>Tooltip</>,
		children: <div>Trigger</div>,
	},
	render: (args) => {
		return <Tooltip {...args} />;
	},
};

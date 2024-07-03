import type { Meta, StoryObj } from '@storybook/react';
import Tag from '.';

const meta: Meta = {
	title: 'Component/Tag',
	tags: ['autodocs'],
	argTypes: {
		rounded: { control: 'boolean' },
		closable: { control: 'boolean' },
		size: {
			control: { type: 'select' },
			options: ['sm', 'lg'],
		},
	},
	decorators: [(story: Function) => <>{story()}</>],
};

export default meta;

export const Default: StoryObj<typeof Tag> = {
	args: {
		rounded: false,
		closable: false,
		children: 'Tag',
		size: 'sm',
	},
	render: function Render(args) {
		return <Tag {...args}>{args.children}</Tag>;
	},
};

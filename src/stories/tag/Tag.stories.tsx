import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';

const meta: Meta = {
	title: 'Component/Tag',
	tags: ['autodocs'],
	component: Tag,
};

export default meta;

export const Default: StoryObj<typeof Tag> = {
	render: (args) => {
		return <Tag {...args}>{(args.children = 'Tag')}</Tag>;
	},
};

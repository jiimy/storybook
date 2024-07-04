import type { Meta, StoryObj } from '@storybook/react';
import Tag from '.';

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

export const Icon: StoryObj<typeof Tag> = {
	...Default,
	render: (args) => (
		<Tag {...args}>
			<Tag.Icon icon={<>🦷</>} />
			{(args.children = 'Tag')}
		</Tag>
	),
};

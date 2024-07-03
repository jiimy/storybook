import type { Meta } from '@storybook/react';
import Tag from '.';

const meta: Meta = {
	title: 'Component/Tag',
	tags: ['autodocs'],
	argTypes: {},
	decorators: [(story: Function) => <>{story()}</>],
};

export default meta;

export const Overflow = () => {
	return (
		<Tag size='sm' color='blue'>
			Tag
		</Tag>
	);
};

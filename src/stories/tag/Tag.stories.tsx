import type { Meta } from '@storybook/react';
import { Tag } from './index';

const meta: Meta = {
	title: 'Component/Tag',
	tags: ['autodocs'],
	argTypes: {},
	decorators: [(story: Function) => <>{story()}</>],
};

export default meta;

export const Overflow = () => {
	return (
		<Tag.Wrapper size='sm' color='blue'>
			<Tag.Label>Tag</Tag.Label>
			<Tag.CloseButton onClick={() => {}} />
		</Tag.Wrapper>
	);
};

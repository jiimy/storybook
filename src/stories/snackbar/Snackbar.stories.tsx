import type { Meta, StoryObj } from '@storybook/react';
import Snackbar from './Snackbar';
import Button from '../button/Button';
import { useHandleSnackbar } from './useHandleSnackbar';

const meta: Meta = {
	title: 'Component/Snackbar',
	tags: ['autodocs'],
	component: Snackbar,
};

export default meta;

export const Default: StoryObj<typeof Snackbar> = {
	render: function Render(args) {
		const { isOpen, openSnackbar } = useHandleSnackbar(3000);
		return (
			<>
				<Snackbar open={isOpen} {...args}>
					스낵바 컴포넌트
				</Snackbar>
				<Button onClick={openSnackbar}>Click</Button>
			</>
		);
	},
};

export const Icon: StoryObj<typeof Snackbar> = {
	...Default,
	render: function Render(args) {
		const { isOpen, openSnackbar } = useHandleSnackbar(3000);
		return (
			<>
				<Snackbar open={isOpen} {...args}>
					<Snackbar.Image>🐤</Snackbar.Image>
					<Snackbar.Description>스낵바 컴포넌트</Snackbar.Description>
				</Snackbar>
				<Button onClick={openSnackbar}>Click</Button>
			</>
		);
	},
};

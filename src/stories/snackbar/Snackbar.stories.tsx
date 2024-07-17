import type { Meta, StoryObj } from '@storybook/react';
import Snackbar from './Snackbar';
import { useState } from 'react';
import Button from '../button/Button';

const meta: Meta = {
	title: 'Component/Snackbar',
	tags: ['autodocs'],
	component: Snackbar,
};

export default meta;

export const Default: StoryObj<typeof Snackbar> = {
	render: function Render() {
		const [isOpen, setIsOpen] = useState(false);
		return (
			<>
				<Snackbar open={isOpen}>스낵바 컴포넌트</Snackbar>
				<Button onClick={() => setIsOpen(true)}>Click</Button>
			</>
		);
	},
};

export const Icon: StoryObj<typeof Snackbar> = {
	...Default,
	render: function Render() {
		const [isOpen, setIsOpen] = useState(false);
		return (
			<>
				<Snackbar open={isOpen}>
					<Snackbar.Image>🐤</Snackbar.Image>
					<Snackbar.Description>스낵바 컴포넌트</Snackbar.Description>
				</Snackbar>
				<Button onClick={() => setIsOpen(true)}>Click</Button>
			</>
		);
	},
};

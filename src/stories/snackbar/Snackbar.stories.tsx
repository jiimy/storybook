import type { Meta, StoryObj } from '@storybook/react';
import Snackbar, { SnackbarWrapper } from './Snackbar';
import { useState } from 'react';
import Button from '../button/Button';

const meta: Meta = {
  title: 'Component/Snackbar',
  tags: ['autodocs'],
  component: Snackbar,
};

export default meta;

export const Default: StoryObj<typeof Snackbar> = {
  render: function Render(args) {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    console.log('open1', open1, open2);

    return (
      <>
        <Button onClick={() => setOpen1(true)}>스낵바 1 열기</Button>
        <Button onClick={() => setOpen2(true)}>스낵바 2 열기</Button>
        <SnackbarWrapper>
          {/* 자동 끄기  */}
          <Snackbar open={open2} timer={2000} onClose={() => setOpen2(false)}>스낵바내용1</Snackbar>
          {/* 수동 끄기 */}
          <Snackbar open={open1} isClose onClose={() => setOpen1(false)}>스낵바 내용</Snackbar>
        </SnackbarWrapper>
      </>
    );
  },
};

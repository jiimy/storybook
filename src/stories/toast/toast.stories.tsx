import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Button from "../button/Button";
import Toast, { ToastWrapper } from "./Toast";
import { Toast2 } from "./Toast2";
import { Toast3, ToastProvider } from "./Toast3";

const meta: Meta<typeof Toast> = {
  title: "Component/Toast",
  component: Toast,
  parameters: {
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof Toast>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    startDirection: 'top-center'
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        {/* <Button onClick={() => setOn(true)}>토스트 오픈</Button> */}
        <Button onClick={() => setIsOpen(true)}>토스트 오픈</Button>
        <ToastWrapper startDirection={args.startDirection}>
          {
            isOpen &&
            <Toast state={args.state} onClose={() => setIsOpen(false)}>
              토스트 내용 1
            </Toast>
          }
        </ToastWrapper>
      </>
    )
  }
}

export const ToastSecond: Story = {
  render: function Render(args) {
    return (
      <>
        <ToastProvider>
          <Button
            onClick={() => Toast2.error('에러')}
          >토스트 열기</Button>
        </ToastProvider>
      </>
    )
  }
}

export const TestFirst: Story = {
  render: function Render(args) {
    const [on, setOn] = useState(false);

    const open = () => {
      setOn(true);
    }

    return (
      <>
        {/* <UserProvider>
          <UserDisplay />
          <UserUpdate />
        </UserProvider> */}
        <ToastProvider>
          <div>
            <button onClick={open}>버튼</button>
            {on && <Toast3 type="info">메시지</Toast3>}
          </div>
        </ToastProvider>
      </>
    )
  }
}

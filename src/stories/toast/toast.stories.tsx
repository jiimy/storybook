import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Button from "../button/Button";
import Toast, { ToastWrapper } from "./Toast";
import { Test2, Toast2, ToastProvider } from "./Toast2";

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

const Teast = () => {
  return (
    <Button
      onClick={() => Test2.aaa('111')}
    >버튼</Button>
  )
}

export const TestFirst: Story = {
  render: function Render(args) {
    return (
      <>
        {/* <UserDisplay />
        <UserUpdate /> */}
        {/* <Button
          onClick={() => Test2.aaa('111')}
        >버튼</Button> */}
        <Teast />
      </>
    )
  }
}

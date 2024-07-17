import type { Meta, StoryObj } from "@storybook/react";
import Toast, { ToastWrapper } from "./Toast";
import Button from "../button/Button";
import { useState } from "react";

const meta: Meta<typeof Toast> = {
  title: "Component/Toast",
  component: Toast,
  parameters: {
  },
  decorators: [
    (Story) => (
      <div style={{ height: '200px' }}>{Story()}</div>
    )
  ],
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
    const [on, setOn] = useState(false);

    return (
      <>
        <Button onClick={() => args.isOpen === true}>토스트 오픈</Button>
        <ToastWrapper startDirection={args.startDirection}>
          {
            // on &&
            <Toast state={args.state} isOpen={args.isOpen} onClose={args.onClose}>
              토스트 내용 1
            </Toast>
          }
        </ToastWrapper>
      </>
    )
  }
}
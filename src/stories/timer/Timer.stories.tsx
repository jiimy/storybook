import type { Meta, StoryObj } from "@storybook/react";
import Timer from "./Timer";

const meta: Meta<typeof Timer> = {
  title: "Component/Timer",
  component: Timer,
  parameters: {
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Timer>;

export default meta;
type Story = StoryObj<typeof Timer>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
  },
  render: function Render(args) {
    return (
      <>
        <Timer />
      </>
    )
  }
}

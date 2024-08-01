import type { Meta, StoryObj } from "@storybook/react";
import Counter from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "Component/Counter",
  component: Counter,
  parameters: {
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof Counter>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    initValue: 0,
    minimum: 100,
    maximum: 100
  },
  render: function Render(args) {
    return (
      <>
        <Counter initValue={args.initValue} minimum={args.minimum} maximum={args.maximum}>
          <Counter.Button type="decrement">-</Counter.Button>
          <Counter.Status />
          <Counter.Button type="increment">+</Counter.Button>
        </Counter>
      </>
    )
  }
}

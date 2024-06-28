import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  parameters: {
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    children: 'Button',
    onClick: () => alert('클릭')
  }
}


// export const Primary: Story = {
//   args: {
//     theme: "primary",
//     children: "Button",
//     onClick: () => alert('dd')
//   },
// };

// export const Secondary: Story = {
//   args: {
//     theme: "secondary",
//     children: "Button",
//   },
// };

// export const Large: Story = {
//   args: {
//     size: "large",
//     children: "Button",
//   },
// };

// export const Small: Story = {
//   args: {
//     size: "small",
//     children: "Button",
//   },
// };

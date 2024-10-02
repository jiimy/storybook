import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Component/Form/InputText",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // validText: { control: 'text' },
    // value: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const BasicButton: Story = {
  args: {

  },
  render: function Render(args) {
    return (
      <>
        <Button type="submit" disabled>{args.children}</Button>
      </>
    )
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

import type { Meta, StoryObj } from "@storybook/react";
import InputText from "./InputText";

const meta: Meta<typeof InputText> = {
  title: "Component/Form/InputText",
  component: InputText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    validText: { control: 'text' },
    value: { control: 'text' }
  },
};

export default meta;
type Story = StoryObj<typeof InputText>;

export const Basic: Story = {
  args: {

  },
  render: function Render(args) {
    return (
      <InputText placeholder="placehoder test" {...args} />
    )
  }
}

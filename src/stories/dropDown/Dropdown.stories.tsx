import type { Meta, StoryObj } from "@storybook/react";
import DropDown from "./DropDown";
import { useState } from "react";

const meta: Meta<typeof DropDown> = {
  title: "Component/DropDown",
  component: DropDown,
  parameters: {
  },
  tags: ["autodocs"],
  argTypes: {
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '10px 0 60px 0' }}>{Story()}</div>
    )
  ]
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof DropDown>;

export const BasicToggle: Story = {
  args: {
    item: ['목록1', '목록2'],
  },
  render: function Render(args) {
    const [toggle, setToggle] = useState(false);

    return (
      <>
        <DropDown toggle={toggle} setToggle={setToggle} item={['목록1', '목록2']} />
      </>
    )
  }
}

export const LinkToggle: Story = {
  args: {
    item: ['목록1', '목록2'],
  },
  render: function Render(args) {
    const [toggle, setToggle] = useState(false);

    return (
      <>
        <DropDown toggle={toggle} setToggle={setToggle} item={[<a href="1">목록1</a>, <a href="1">목록1</a>]} />
      </>
    )
  }
}


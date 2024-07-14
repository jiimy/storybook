import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import Sheet from "./Sheet";
import { useState } from "react";

const meta = {
  title: "Component/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
  },
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }}>{Story()}</div>
    )
  ]
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Toggle: Story = {
  args: {
    isShow: false,
    isDim: false,
  },
  render: function Render(args) {
    const [isShow, setIsShow] = useState(false);

    const openSheet = () => setIsShow(true);
    const closeSheet = () => setIsShow(false);

    return (
      <>
        <button onClick={openSheet}>Open Sheet</button>
        <Sheet {...args} isShow={isShow} onClose={closeSheet} />
      </>
    );
  },
};

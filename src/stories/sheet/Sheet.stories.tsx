import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import Sheet from "./Sheet";
import { useState } from "react";

const meta = {
  title: "Component/Sheet",
  component: Sheet,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  args: {
  }
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
        <div>
          <Sheet {...args} isShow={isShow} onClose={closeSheet} />
        </div>
      </>
    );
  },
};


// export const open: Story = (args:any) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpen = () => setIsOpen(true);
//   const handleClose = () => setIsOpen(false);

//   return (
//     <>
//     111
//     </>
//   );
// };
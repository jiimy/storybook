import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import { Modal } from "./Modal";
import { useState } from "react";

const meta = {
  title: "Component/Modal",
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  args: {
  }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Toggle: Story = {
  args: {
    // isShow: false,
    // isDim: false,
  },
  render: function Render(args) {
    const [modal1, setModal1] = useState(false);

    console.log('모달 오픈 ', modal1);

    return (
      <>
        <button onClick={() => setModal1(true)}>모달1</button>
        {modal1 &&
          <Modal setOnModal={() => setModal1(false)} dimClick={args.dimClick} isDim={args.isDim} onClose={args.onClose}>
            <Modal.Title>모달 타이틀</Modal.Title>
          </Modal>
        }
      </>
    );
  },
};

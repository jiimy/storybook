import type { Meta, StoryObj } from "@storybook/react";
import Stepper from "./Stepper";
import axios from "axios";
import { useEffect, useState } from "react";

const meta: Meta<typeof Stepper> = {
  title: "Component/Stepper",
  component: Stepper,
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
type Story = StoryObj<typeof Stepper>;

export const BasicButton: Story = {
  args: {
  },
  render: function Render(args) {

    return (
      <>
        <Stepper initList={['0', '1']} select={'1'} groupName="number">
          <Stepper.Item />
          <Stepper.Item />
        </Stepper>

        <br /><br /><br /><br />
        <Stepper initList={['aa', 'bb']} select={'aa'} groupName="alphabet">
          <Stepper.Item />
          <Stepper.Item />
        </Stepper>
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

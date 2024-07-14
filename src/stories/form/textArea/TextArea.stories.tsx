import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "./TextArea";
import { useState } from "react";

const meta: Meta<typeof TextArea> = {
  title: "Component/Form/TextArea",
  component: TextArea,
  parameters: {
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof TextArea>;

export const AutoHeight: Story = {
  args: {
    theme: 'auto'
  },
}

export const DefaultHeight: Story = {
  args: {
    theme: 'default'
  },
}

import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import TimerProgressBar from "./TimerProgressBar";

import { useState } from "react";

const meta = {
  title: "Component/TimerProgressBar",
  component: TimerProgressBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  args: {
  }
} satisfies Meta<typeof TimerProgressBar>;

export default meta;
type Story = StoryObj<typeof TimerProgressBar>;

export const Start: Story = {
  args: {
  },
  render: function Render(args) {
    const [getOpen, setGetOpen] = useState(false);

    const clickToggleProgress = (state: boolean) => {
      setGetOpen(state);
    };

    return (
      <>
        <button onClick={() => clickToggleProgress(true)}>시작</button>
        <div>
          {/* <TimerProgressBar /> */}
        </div>
      </>
    );
  },
};

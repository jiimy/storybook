import type { Meta, StoryObj } from "@storybook/react";
import AnimationTimeline from "./AnimationTimeline";

const meta: Meta<typeof AnimationTimeline> = {
  title: "Component/AnimationTimeline",
  component: AnimationTimeline,
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
type Story = StoryObj<typeof AnimationTimeline>;

export const BasicAnimationTimeline: Story = {
  args: {
    children: <div className="animationTimelineTest">블라블라</div>,
  },
  parameters: {
    docs: {
      description: {
        story: "굳이 컴포넌트까진 필요없지만 animationTimeline 예제용으로 만들어졌습니다. ",
      },
    },
  },
  render: function Render(args) {
    return (
      <>
        <AnimationTimeline className="container">{args.children}</AnimationTimeline>
      </>
    )
  }
}
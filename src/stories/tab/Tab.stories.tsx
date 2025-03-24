import type { Meta, StoryObj } from "@storybook/react";
import Tab from "./Tab";
import { useState } from "react";
import TabNav from "./items/TabNav";

const meta: Meta<typeof Tab> = {
  title: "Component/Tab",
  component: Tab,
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
type Story = StoryObj<typeof TabNav>;

export const BasicButton: Story = {
  args: {
    // children: '버튼',
    // theme: 'primary',
    // size: 'medium',
    // onClick: () => alert('버튼 클릭'),
    nav: ['11', '22'],
  },
  render: function Render(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <>
        {/* context api 없이 이게 최선인가.. */}
        <Tab>
          <Tab.TabNav {...args} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          <Tab.TabList activeIndex={activeIndex}>
            111
          </Tab.TabList>
          <Tab.TabList activeIndex={activeIndex}>
            222
          </Tab.TabList>
        </Tab>
      </>
    )
  }
}

import type { Meta, StoryObj } from "@storybook/react";
import Tab from "./Tab";
import { useState } from "react";

type tabProps = {
  nav: string[];
  children?: React.ReactNode[];
};

const meta: Meta<typeof Tab> = {
  title: "Component/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<tabProps>;

export const BasicButton: Story = {
  args: {
    nav: ['11', '22'],
    children: ['Content for Tab 1', 'Content for Tab 2']
  },
  render: function Render(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <>
        <Tab>
          <Tab.TabNav nav={args?.nav} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          {args.nav.map((label, index) => (
            <Tab.TabList key={index} activeIndex={activeIndex} index={index}>
              {args?.children?.[index] || `Default Content for ${label}`}
            </Tab.TabList>
          ))}
        </Tab>
      </>
    );
  }
}

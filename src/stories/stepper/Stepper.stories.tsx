import type { Meta, StoryObj } from "@storybook/react";
import Stepper from "./Stepper";
import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "./mockupData";

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
    // 대륙 - 국가 - 수도 일때 
    return (
      <>
        {/* initList 로 초기 데이터를 한번에 다 넘겨서 자동으로, 순차적으로 필터링 선택될수도있고 */}
        {/* select는 초기 값의 몇번째 값인지 */}
        <Stepper initList={data} initSelect={0} groupName="number">
          {/* data는 옵션, api도 옵션으로 넣을수있게 하기 */}
          <Stepper.Item />
          <Stepper.Item />
        </Stepper>

        <br /><br /><br /><br />
        {/* 단계 마다 데이터를 넘겨줄수도 있게. */}
        {/* <Stepper initList={['aa', 'bb']} initSelect={1} groupName="alphabet">
          <Stepper.Item data={data} />
          <Stepper.Item />
        </Stepper> */}
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

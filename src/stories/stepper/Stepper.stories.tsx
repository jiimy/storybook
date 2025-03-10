import type { Meta, StoryObj } from "@storybook/react";
import Stepper from "./Stepper";
import Stepper2 from "./Stepper2";
import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "./mockupData";

const meta: Meta<typeof Stepper2> = {
  title: "Component/Stepper2",
  component: Stepper2,
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
          {/* <Stepper.Item /> */}
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


export const Stepper2Ui: Story = {
  args: {
  },
  render: function Render(args) {
    const [sendText, setSendText] = useState<string[]>([]);
    console.log('선택된 텍스트', sendText);

    return (
      <>
        처음부터 다 보여주기
        <Stepper2 initData={data} selected={setSendText} nsxtSelect />

        <br />

        부분적으로 단계에 따라 보여주기
        <Stepper2 initData={data} selected={setSendText} />
      </>
    )
  }
}

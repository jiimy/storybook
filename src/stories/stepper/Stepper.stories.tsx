import type { Meta, StoryObj } from "@storybook/react";
import Stepper from "./Stepper";
import Stepper2 from "./Stepper2";
import axios from "axios";
import { useEffect, useState } from "react";
import { data, data1 } from "./mockupData";

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
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleDataChange = (selectedKeys: string[]) => {
      // setSelectedValues(selectedKeys);
      console.log('Selected Values:', selectedKeys);
    };
    return (
      <>
        {/* initList 로 초기 데이터를 한번에 다 넘겨서 자동으로, 순차적으로 필터링 선택될수도있고 */}
        {/* select는 초기 값의 몇번째 값인지 */}
        <Stepper initList={data} initSelect={0} groupName="number" sendData={handleDataChange}>
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


// export const Stepper2Ui: Story = {
//   args: {
//   },
//   render: function Render(args) {
//     const [sendText, setSendText] = useState<string[]>([]);
//     console.log('선택된 텍스트', sendText);

//     return (
//       <>
//         처음부터 다 보여주기
//         {/* NOTE: 한개로 하니 레이아웃 계산도 힘듬. */}
//         <Stepper2 initData={data} selected={setSendText} nsxtSelect />

//         <br />

//         부분적으로 단계에 따라 보여주기
//         <Stepper2 initData={data1} selected={setSendText} />
//       </>
//     )
//   }
// }

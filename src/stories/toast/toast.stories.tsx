import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Button from "../button/Button";
import Toast, { ToastWrapper } from "./Toast";
import { Toast2 } from "./Toast2";
import { Toast3, ToastProvider } from "./Toast3";
import { Toast4, ToastProvider4 } from "./Toast4";
import { useToast } from "./NewToastContext";
import { ToastContainer } from "./NewToast";

const meta: Meta<typeof Toast> = {
  title: "Component/Toast",
  component: Toast,
  parameters: {
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof Toast>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Basic: Story = {
//   args: {
//     startDirection: 'top-center'
//   },
//   render: function Render(args) {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//       <>
//         {/* <Button onClick={() => setOn(true)}>토스트 오픈</Button> */}
//         <Button onClick={() => setIsOpen(true)}>토스트 오픈</Button>
//         <ToastWrapper startDirection={args.startDirection}>
//           {
//             isOpen &&
//             <Toast state={args.state} onClose={() => setIsOpen(false)}>
//               토스트 내용 1
//             </Toast>
//           }
//         </ToastWrapper>
//       </>
//     )
//   }
// }

// export const ToastSecond: Story = {
//   render: function Render(args) {
//     return (
//       <>
//         <ToastProvider>
//           <Button
//             onClick={() => Toast2.error('에러')}
//           >토스트 열기</Button>
//         </ToastProvider>
//       </>
//     )
//   }
// }

// 컴포넌트 형식은 되나, 객체를 불러오는것은 hook에러가 남
//  <UserProvider>
// <UserDisplay />
// <UserUpdate />
// </UserProvider>
// export const ToastThird: Story = {
//   render: function Render(args) {
//     const [on1, setOn1] = useState(false);
//     const [on2, setOn2] = useState(false);

//     const open1 = () => {
//       setOn1(true);
//     }
//     const open2 = () => {
//       setOn2(true);
//     }

//     return (
//       <>
//         <ToastProvider>
//           <div>
//             <button onClick={open1}>버튼1</button>
//             {on1 && <Toast3 type="info">메시지1</Toast3>}
//             <button onClick={open2}>버튼2</button>
//             {on2 && <Toast3 type="info">메시지2</Toast3>}
//           </div>
//         </ToastProvider>
//       </>
//     )
//   }
// }


// export const ToastFourth: Story = {
//   render: function Redner(args) {
//     return (
//       <>
//         <Button
//           onClick={() => Toast4.success('이름')}
//         >버튼</Button>
//       </>
//     )
//   }
// }

export const ToastFourth: Story = {
  render: function Redner(args) {
    const { addToast } = useToast();
    return (
      <>
        <button
          onClick={() => addToast('기본 토스트 메시지입니다.', 3000)}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          기본 토스트
        </button>
      </>
    )
  }
}
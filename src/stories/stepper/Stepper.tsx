import React, { createContext, useContext, useEffect, useState } from 'react';
import s from './stepper.module.scss';
import StepperItem from './item/StepperItem';
import styled, { css } from 'styled-components';
import { group } from 'console';

type stepperUiType = {
  theme?: 'breadcrumb' | 'dropdown'
}
type stepperType<T> = {
  children: React.ReactNode;
  initSelect: number; // 초기 선택 값 순서
  // select: string;
  className?: string;
  groupName: string; // 연관되는 그룹이름. 알아보는 용도
  initList: T;
} & stepperUiType


type StepperContextType = {
  updateList: any;
  setUpdateList: (key: string, index: number, arr: unknown[]) => void; // set 함수
  groupName: string;
  initSelect: number;
  // setSelect: () => {}
  setSelect: React.Dispatch<React.SetStateAction<string>>;
};

// Context 생성
const StepperContext = createContext<StepperContextType | undefined>(undefined);

const StepperStyle = styled.div<stepperUiType>`
  .${s.stepper} {
    
  }
  ${props => props.theme === 'dropdown' && css`
    display: flex;
    .${s.stepper} {
      display: flex;
      height: 40px;
      border-radius: 10px;
      border: 1px solid black;
      padding: 0 10px;
      align-items: center;
      justify-content: center;

      &.is_open {
      border-radius: 10px 10px 0 0 ;
      }
    }
  `}
`

// Stepper 컴포넌트
const Stepper = <T extends any>({ children, className, initSelect, theme = 'dropdown', initList, groupName }: stepperType<T>) => {
  const [select, setSelect] = useState('11');
  const [updateList, setUpdateList] = useState(initList);

  // 리스트 업데이트 함수
  const handleUpdateList = (key: string, index: number, arr: unknown[]) => {
    // setUpdateList(prevState => ({
    //   ...prevState,
    //   [key]: { index, arr },
    // }));
  };
  // 저장할 공간 : index, groupname, list
  // {
  //   name: groupName, 
  //   0: {
  //     ['1-a', '1-b']
  //   }
  // }
  // item에서 변경이 일어날때 groupname이 같다면, index 와 list 추가
  console.log('DD', initList);

  const onSelect = (value: string) => {
    // setSelect(value);

  };


  return (
    // <StepperContext.Provider value={{ value: selected, select: onSelect, setList: updateList }}>
    <StepperContext.Provider value={{ updateList, setUpdateList: handleUpdateList, groupName, initSelect, setSelect }}>
      <StepperStyle className={`${s.stepper_wrapper} ${className}`} theme={theme}>
        {React.Children.map(children, (child, childrenIndex) => {
          return React.cloneElement(child as React.ReactElement<any>, { childrenIndex });
        })}
      </StepperStyle>
    </StepperContext.Provider>
  );
};


Stepper.Item = StepperItem;

export default Stepper;
export type { stepperType };

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (context === undefined) {
    throw new Error("Counter Context가 없습니다.");
  }
  return context;
}
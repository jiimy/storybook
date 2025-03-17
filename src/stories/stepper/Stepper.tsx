import React, { createContext, useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import s from './stepper.module.scss';
import StepperItem from './item/StepperItem';

type stepperUiType = {
  theme?: 'breadcrumb' | 'dropdown';
};

type stepperType<T> = {
  children: React.ReactNode;
  initSelect: number; // 초기 선택 값 순서
  className?: string;
  groupName: string; // 연관되는 그룹이름. 알아보는 용도
  initList: T;
} & stepperUiType;

type StepperContextType = {
  updateList: any;
  setUpdateList: (key: string, index: number, arr: unknown[]) => void; // set 함수
  groupName: string;
  initSelect: number;
  selectedKeys: string[];
  setSelectedKeys: React.Dispatch<React.SetStateAction<string[]>>;
};

// Context 생성
const StepperContext = createContext<StepperContextType | undefined>(undefined);

const StepperStyle = styled.div<stepperUiType>`
  .${s.stepper} {
  }
  ${props =>
    props.theme === 'dropdown' &&
    css`
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
          border-radius: 10px 10px 0 0;
        }
      }
    `}
`;

// Stepper 컴포넌트
const Stepper = <T extends any>({ children, className, initSelect, theme = 'dropdown', initList, groupName }: stepperType<T>) => {
  const [updateList, setUpdateList] = useState(initList);

  // 초기값 설정 함수
  const initializeSelectedKeys = (list: any, depth: number): string[] => {
    const keys: string[] = [];
    let currentData = list;
    for (let i = 0; i <= depth; i++) {
      const key = Object.keys(currentData)[0];
      keys.push(key);
      currentData = currentData[key];
    }
    return keys;
  };

  const [selectedKeys, setSelectedKeys] = useState<string[]>(initializeSelectedKeys(initList, initSelect));

  // 리스트 업데이트 함수
  const handleUpdateList = (key: string, index: number, arr: unknown[]) => {
    // setUpdateList(prevState => ({
    //   ...prevState,
    //   [key]: { index, arr },
    // }));
  };

  return (
    <StepperContext.Provider value={{ updateList, setUpdateList: handleUpdateList, groupName, initSelect, selectedKeys, setSelectedKeys }}>
      <StepperStyle className={`${s.stepper_wrapper} ${className}`} theme={theme}>
        {React.Children.map(children, (child, childrenIndex) => {
          return React.cloneElement(child as React.ReactElement<any>, { childrenIndex, data: initList });
        })}
      </StepperStyle>
    </StepperContext.Provider>
  );
};

Stepper.Item = StepperItem;

export default Stepper;
export type { stepperType };

export const useStepper = (): StepperContextType => {
  const context = useContext(StepperContext);
  if (context === undefined) {
    throw new Error("Counter Context가 없습니다.");
  }
  return context;
};
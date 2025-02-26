import React, { createContext, useContext, useState } from 'react';
import s from './stepper.module.scss';
import StepperItem from './item/StepperItem';
import styled, { css } from 'styled-components';

type stepperUiType = {
  theme?: 'breadcrumb' | 'dropdown'
}
type stepperType = {
  children: React.ReactNode;
  initList: string[];  // 첫번째 단계에서 보여줄 리스트
  select: string;  // 초기 선택 값
  className?: string;
  groupName: string; // 연관되는 그룹이름. 알아보는 용도
} & stepperUiType


type StepperContextType = {
  value: string;  // 선택된 값
  select: (value: string) => void;  // 값을 선택하는 함수
  list: string[];  // 현재 단계에 해당하는 리스트
  setList: (list: string[]) => void;  // 리스트를 업데이트하는 함수
  groupName?: string;
};

// Context 생성
const StepperContext = createContext<StepperContextType | undefined>(undefined);

// Context 훅
export const useStepper = () => {
  const context = useContext(StepperContext);
  if (context === undefined) {
    throw new Error("Counter Context가 없습니다.");
  }
  return context;
}

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
      &:is_open {
      border-radius: 10px 10px 0 0 ;
      }
    }
  `}
`

// Stepper 컴포넌트
const Stepper = ({ children, className, select, initList, groupName, theme = 'dropdown' }: stepperType) => {
  const [selected, setSelected] = useState<string>(select || initList[0]);
  const [list, setList] = useState<string[]>(initList);
  const [grouptIndex, setGrouptIndex] = useState(0);

  const onSelect = (value: string) => {
    setSelected(value);
  };

  // 리스트 업데이트 함수 (각 단계에 맞게 리스트를 업데이트)
  const updateList = (value: string[]) => {

  };

  return (
    <StepperContext.Provider value={{ value: selected, select: onSelect, list, groupName, setList: updateList }}>
      <StepperStyle className={`${s.stepper_wrapper} ${className}`} theme={theme}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child as React.ReactElement<any>, { index });
        })}
      </StepperStyle>
    </StepperContext.Provider>
  );
};


Stepper.Item = StepperItem;

export default Stepper;
export type { stepperType };

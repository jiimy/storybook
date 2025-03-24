import React, { useState } from 'react';
import TabNav from './items/TabNav';
import TabList from './items/TabList';

type TabProps = {
  children: React.ReactNode;
  defaultIndex?: number;
  className?: string
};

// type TabNavProps = {
//   nav: string[]; // 탭 네비게이션 라벨
//   activeIndex: number; // 현재 활성 탭 인덱스
//   setActiveIndex: (index: number) => void; // 탭 인덱스 변경 함수
//   className?: string;
//   isSelectClassName?: string;
// }

const Tab = ({ children, defaultIndex = 0, className }: TabProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  let tabIndex = 0;
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === Tab.TabNav) {
        return React.cloneElement(child, {
          activeIndex,
          setActiveIndex,
        } as React.ComponentProps<typeof TabNav>);
      }
      if (child.type === Tab.TabList) {
        return React.cloneElement(child, {
          activeIndex,
          index: tabIndex++,
        } as React.ComponentProps<typeof TabList>);
      }
    }
    return child;
  });

  return <div>{childrenWithProps}</div>;
};

Tab.TabNav = TabNav;
Tab.TabList = TabList;

export default Tab;
export type { TabProps }
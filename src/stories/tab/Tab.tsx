import React, { useState } from 'react';
import TabNav, { TabNavProps } from './items/TabNav';
import TabList, { TabListProps } from './items/TabList';

type TabProps = {
  children: React.ReactNode;
  defaultIndex?: number;
  className?: string
}


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
export type { TabProps, TabListProps, TabNavProps };
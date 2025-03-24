import classNames from 'classnames';
import React from 'react';
import s from '../tab.module.scss';

type TabListProps = {
  children: React.ReactNode;
  activeIndex: number; // 현재 활성 탭 인덱스
  index?: number; // 탭 인덱스 (선택 사항)
  className?: string;
};

const TabList = ({ children, activeIndex, index = 0, className }: TabListProps) => {
  // 현재 활성 탭과 일치하는 경우에만 내용을 렌더링
  return activeIndex === index ? <div className={classNames([s.tab_list], className)}>{children}</div> : null;
};

export default TabList;
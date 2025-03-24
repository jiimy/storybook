import classNames from 'classnames';
import React from 'react';
import s from '../tab.module.scss';

type TabNavProps = {
  nav: string[]; // 탭 네비게이션 라벨
  activeIndex: number; // 현재 활성 탭 인덱스
  setActiveIndex: (index: number) => void; // 탭 인덱스 변경 함수
  className?: string;
  isSelectClassName?: string;
};

const TabNav = ({ nav, activeIndex, setActiveIndex, className, isSelectClassName }: TabNavProps) => {
  return (
    <div className={classNames([s.tab_nav], className)}>
      {nav.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)} // 클릭 시 이벤트 핸들러 호출
          className={classNames({ [isSelectClassName || '']: index === activeIndex })}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default TabNav;
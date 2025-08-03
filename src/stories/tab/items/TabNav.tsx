import classNames from 'classnames';
import { useRef, useEffect, useState } from 'react';
import s from '../tab.module.scss';

type TabNavProps = {
  nav: string[]; // 탭 네비게이션 라벨
  activeIndex: number; // 현재 활성 탭 인덱스
  setActiveIndex: (index: number) => void; // 탭 인덱스 변경 함수
  className?: string;
  isSelectClassName?: string;
};



type BarStyle = {
  left: number;
  width: number;
};


function useTabBar(navLength: number, activeIndex: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [barStyle, setBarStyle] = useState<BarStyle>({ left: 0, width: 0 });
}


const TabNav = ({ nav, activeIndex, setActiveIndex, className, isSelectClassName }: TabNavProps) => {
  // const { containerRef, barStyle } = useTabBar(nav.length, activeIndex);

  return (
    <div className={classNames([s.tab_nav], className)}
    // ref={containerRef}
    >
      {nav.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)} // 클릭 시 이벤트 핸들러 호출
          className={classNames({ [isSelectClassName || '']: index === activeIndex })}
        >
          {item}
        </button>
      ))}
      {/* <div className={s.tab_nav_bar} style={barStyle} /> */}
    </div>
  );
};

export default TabNav;
export type { TabNavProps }
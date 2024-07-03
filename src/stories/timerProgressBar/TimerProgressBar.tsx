import React from 'react';
import styled from "styled-components";

// TODO: 복잡성 문제로 보류
type timerProgressBarProps = {
  theme?: 'tick' | 'fill' // tick: 칸으로 채워짐. fill: 칸이 아닌 스르륵 채워짐
  percent?: boolean // 숫자 퍼센트 보여주기 유무
  timer: number; // 총 시간
  delay?: number; // 시작 지연 시간
  itemNumber?: number | 'auto' // 칸 갯수 - 자동 일경우 전체 width의 일정width값을 가진 item 생성
  start: boolean;
}

function loopRender(i: any, count: any) {
  let second = i / count;
  return `
		&:nth-child(${i + 1}) {
      background: #ccc;
      transition-delay: ${second}s;
    }
	`;
}

function arrayloop(props: any) {
  let str = "";
  for (let index = 0; index < props.count; index++) {
    str += loopRender(index, props.count);
  }
  return str;
};

const ProgressWrap = styled.div<timerProgressBarProps>`
  .timer-progress-item {
      ${(props) => arrayloop(props.itemNumber)};
    }
`

const TimerProgressBar = ({ theme = 'fill', ...attr }: timerProgressBarProps) => {
  return (
    <>
      {
        theme === 'fill' &&
        <ProgressWrap {...attr}>

        </ProgressWrap>
      }
      {
        theme === 'tick' &&
        <ProgressWrap {...attr}>
          {
            typeof attr.itemNumber === 'number' &&
            [...Array(attr.itemNumber)].map((n, index) => (
              <div
                className="timer-progress-item"
                data-time={index + 1}
                key={index}
              ></div>
            ))
          }
        </ProgressWrap>
      }
    </>
  );
};

export default TimerProgressBar;
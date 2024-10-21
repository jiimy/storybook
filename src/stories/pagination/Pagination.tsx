import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import s from './pagination.module.scss';
import styled from 'styled-components';
import classNames from 'classnames';

type paginationType = {
  theme?: 'auto' | 'default', // auto일 경우 항상 선택한 번호가 가운데를 넘지 않음. default 일 경우 마지막 번호를 선택하면 자동으로 다음 번호가 나오지 않음. 
  isButton?: boolean,
  className?: any,

  setCurrentPage: (index: number) => void, // 현재 선택된 index
  currentPage: number, // 현재 페이지
  btnRange?: 5 | 10 | number, // 한번에 보여줄 버튼 갯수 - 미사용됨
  pageRange?: number, // 페이지당 보여줄 갯수 - 
  totalPost: number, // 총 갯수
}

/**
 * theme - auto, default
 * <br/>
 * <br/>
 * auto: 자동으로 선택한 버튼이 가운데에 위치
 * <br/>
 * default: 버튼이 이동하지 않고, 컨트롤러를 이용해 다음 그룹으로 이동
 */
const Pagination = ({
  theme = 'auto',
  isButton = true,
  btnRange = 10,
  pageRange = 10,
  currentPage,
  totalPost,
  setCurrentPage,
  className
}: paginationType) => {
  const [currentBtn, setCurrentBtn] = useState(currentPage); // 현재 선택한 버튼 - 사용중

  const EndBtnNumber = Math.ceil(totalPost / pageRange); // 맨마지막 버튼 
  const [renderButton, setRenderButton] = useState<number>(btnRange); // 한 그룹당 보여줄 버튼 갯수
  const btnGroupIndex = Math.ceil(currentBtn / btnRange); // 그룹 인덱스 번호
  const [startPage, setStartPage] = useState<number>(1); // 시작버튼

  useEffect(() => {
    if (theme !== 'auto') {
      setStartPage((btnGroupIndex - 1) * btnRange + 1)
    }
  }, [btnGroupIndex, btnRange])

  // 그룹이 바뀔때 남는 갯수만큼 버튼 보여주기
  useEffect(() => {
    // 1그룹이 안될경우
    if (theme !== 'auto') {
      if (btnRange * pageRange > totalPost) {
        const calc = Math.ceil(totalPost / pageRange);
        setRenderButton(calc);
        // 2그룹이상인 경우 남는 버튼만 보여주기
      } else {
        setRenderButton(btnRange)
        // 마지막 그룹일때 : 올림(맨마지막 버튼 11 / 버튼 범위 10)  === 그룹 인덱스 2
        if (Math.ceil(currentBtn / btnRange) === Math.ceil(EndBtnNumber / btnRange)) {

          const residue = Math.ceil((totalPost - (btnRange * pageRange)) / pageRange)
          const calcresidue = residue > btnRange ? residue - btnRange : residue

          setRenderButton(calcresidue);
        }
      }
    }
    else {

    }
  }, [totalPost, btnGroupIndex])

  // 현재 선택한 버튼
  useEffect(() => {
    setCurrentPage(currentBtn);
    // theme가 auto인 경우
    // auto 일때
    if (theme === 'auto') {
      // 시작버튼값이 변경되는 영역일때(범위 안) - 선택한 값이 3이상 maxbtn의 - 2일때
      if (Math.ceil(btnRange / 2) < currentBtn && currentBtn <= EndBtnNumber - Math.ceil(EndBtnNumber / btnRange)) {
        setStartPage(currentBtn - Math.round(btnRange / 2) + 1)
      }
      // 시작 영역일때(범위 앞)
      if (Math.ceil(btnRange / 2) >= currentBtn) {
        setStartPage(1);
      }
      // 끝 영역일때(범위 뒤) 
      // NOTE: 이전 복잡하게 생각했던 로직
      // if (Math.ceil(btnRange / 2) < currentBtn && currentBtn > EndBtnNumber - Math.ceil(btnRange / 2) + 1) {
      //   setStartPage(currentBtn - Math.round(btnRange / 2))
      // }
      if (EndBtnNumber - renderButton + (renderButton / 2) < currentBtn) {
        setStartPage(EndBtnNumber - renderButton + 1)
      }
      // 맨끝일때
      if (currentBtn === EndBtnNumber) {
        setStartPage(EndBtnNumber - btnRange + 1)
      }
    }
  }, [currentBtn])

  // useEffect(() => {
  // }, [cu])


  const StartButton = () => {
    return (<Button onClick={() => setCurrentBtn(1)}>{'<<'}</Button>)
  }
  const EndButton = () => {
    return (<Button onClick={() => setCurrentBtn(EndBtnNumber)}>{'>>'}</Button>)
  }
  const PrevButton = () => {
    return (<Button onClick={() => setCurrentBtn(prev => prev - 1)}>{'<'}</Button>)
  }
  const NextButton = () => {
    return (<Button onClick={() => setCurrentBtn(prev => prev + 1)}>{'>'}</Button>)
  }

  return (
    <>
      <div className={s.pagination}>
        {
          isButton && currentBtn > 1 &&
          <>
            <StartButton />
            <PrevButton />
          </>
        }
        <div>
          {Array(renderButton)
            .fill(startPage)
            .map((_, index) => {
              return (
                <Button
                  key={index}
                  theme='secondary'
                  onClick={() => setCurrentBtn(startPage + index)}
                  className={classNames('', {
                    [s.is_select]: startPage + index === currentBtn
                  })}
                >
                  {startPage + index}
                </Button>
              );
            })}
        </div>
        {
          isButton && EndBtnNumber !== currentBtn && <>
            <NextButton />
            <EndButton />
          </>
        }
      </div>
    </>
  );
};

export default Pagination;
export type { paginationType }

// 확인용 주석
// console.log(`현재 페이지수 ${ currentBtn } 그룹 ${ btnGroupIndex }
//   ${startPage + btnRange - 1}
//   버튼 범위 ${btnRange}
//   렌더버튼 ${renderButton}
//   맨마지막 버튼 ${EndBtnNumber}
//   ` )
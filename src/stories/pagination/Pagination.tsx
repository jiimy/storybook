import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import s from './pagination.module.scss';
import styled from 'styled-components';
import classNames from 'classnames';

type paginationType = {
  theme?: 'auto' | 'default', // auto일 경우 항상 선택한 번호가 가운데를 넘지 않음. default 일 경우 마지막 번호를 선택하면 자동으로 다음 번호가 나오지 않음. 
  isButton?: boolean,

  setCurrentPage: (index: number) => void, // 현재 선택된 index
  currentPage: number, // 현재 페이지
  btnRange?: 5 | 10 | number, // 한번에 보여줄 버튼 갯수 - 미사용됨
  pageRange?: number, // 페이지당 보여줄 갯수 - 
  totalPost: number, // 총 갯수
}

/**
 * theme - auto : 5개 이고 auto이면 선택한 index가 4이상일때 선택한 index가 가운데 (ex. 3선택 -> 번호이동 없음. 번호는 12345, 4선택 -> 번호이동 있음. 번호는 23456
 * theme - default 
 */
const Pagination = ({
  theme = 'auto',
  isButton = true,
  btnRange = 10,
  pageRange = 10,
  currentPage,
  totalPost,
  setCurrentPage,
  ...props
}: paginationType) => {
  const [currentBtn, setCurrentBtn] = useState(currentPage); // 현재 선택한 버튼 - 사용중
  const [array, setArray] = useState<number[]>([]); // auto일때 사용.
  const btnGroupIndex = Math.ceil(currentBtn / btnRange);
  const startPage = (btnGroupIndex - 1) * btnRange + 1;

  const PrevButton = () => {
    return (<Button onClick={() => setCurrentBtn(prev => prev - 1)}>{'<'}</Button>)
  }
  const NextButton = () => {
    return (<Button onClick={() => setCurrentBtn(prev => prev + 1)}>{'>'}</Button>)
  }

  useEffect(()=> {
    setCurrentPage(currentBtn);
    console.log(`현재 페이지수 ${currentBtn} 그룹 ${btnGroupIndex}` )
  }, [currentBtn])

  return (
    <>
    {theme === 'auto' && 
      <div className={s.pagination}>
        <Button >{'<<'}</Button>
        <PrevButton/>
        <div>
            {array.map((item, index) => 
              <Button onClick={() => setCurrentPage(index + 1)}
                theme='secondary'
                // TODO: 이 부분 styled로 할지 scss로 할지 고민중
                className={classNames('', {
                  [s.is_select]: currentBtn === index + 1
                })} key={index} >{index + 1}</Button>
            )}
        </div>
          <NextButton />
        <Button>{'>>'}</Button>
      </div>
    }
      {theme === 'default' &&
        <div className={s.pagination}>
          <Button >{'<<'}</Button>
          <PrevButton/>
          <div>
            {/* {Array.from({ length: pageRange }, (_, index) => (
              <Button key={index} onClick={() => setCurrentBtn(index + 1)}
                theme='secondary'
                className={s.is_select}
              >{index + 1}</Button>
            ))} */}
            {Array(btnRange)
              .fill(startPage)
              .map((_, index) => {
                return (
                  <Button
                    key={index}
                    theme='secondary'
                    onClick={() => setCurrentBtn(startPage + index)
                    }
                  >
                    {startPage + index}
                  </Button>
                );
              })}
          </div>
          <NextButton />
          <Button>{'>>'}</Button>
        </div>
      }
    </>
  );
};

export default Pagination;
export type { paginationType }


// const StartButton = () => {

// }const StartButton = () => {

// }const StartButton = () => {
  
// }
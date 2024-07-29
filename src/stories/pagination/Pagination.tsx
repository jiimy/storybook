import React from 'react';
import Button from '../button/Button';
import s from './pagination.module.scss';

type paginationType = {
  theme?: 'auto' | 'default', // auto일 경우 항상 선택한 번호가 가운데를 넘지 않음. viewNumber 가 
  // viewNumber?: 5 | 10 | number, // 한번에 보여줄 버튼 갯수
  isButton?: boolean,

  // pageIndex: React.Dispatch<React.SetStateAction<number>>, // 현재 선택된 index
  // pageRange: number, // 페이지당 보여줄 갯수
  totalPost: number, // 총 갯수
}

/**
 * theme - auto : 5개 이고 auto이면 선택한 index가 4이상일때 선택한 index가 가운데 (ex. 3선택 -> 번호이동 없음. 번호는 12345, 4선택 -> 번호이동 있음. 번호는 23456
 * theme - default 
 */
const Pagination = ({ theme = 'auto',
  // viewNumber = 5, 
  isButton = true,
  totalPost,
  // pageIndex, 
  ...props }: paginationType) => {

  const pageNumbers = [];
  for (let i = 1; i <= totalPost; i++) {
    pageNumbers.push(i);
  }

  console.log('받은 데이터', totalPost);
  // const itemCount =

  // return (
  //   <div>
  //     <Button >{'<<'}</Button>
  //     <Button>{'<'}</Button>
  //     페이지네이션
  //     <ul>
  //       {totalPost.map((item: any[], index: number) => <li>

  //       </li>)}
  //     </ul>
  //     <Button>{'>'}</Button>
  //     <Button>{'>>'}</Button>
  //   </div>
  // );
  return (
    <>
      <ul className={s.container}>
        {pageNumbers.map((item: any, index: number) => (
          <li
            key={index}
            onClick={() => {
              // console.log("클릭", pageNumber[name]);
            }}
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
export type { paginationType }
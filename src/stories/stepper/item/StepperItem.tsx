import React, { useEffect, useState } from 'react';
import { useStepper } from '../Stepper';
import s from '../stepper.module.scss';
import classNames from 'classnames';

type stepperType = {
  childrenIndex?: number
  data?: any
}

const StepperItem = ({ childrenIndex, data }: stepperType) => {
  const { updateList, groupName, initSelect, setUpdateList } = useStepper();
  // const keys = updateList[groupName]['arr'].map((item: any) => Object.keys(item)[0])
  const [show, setShow] = useState(false);
  const [li, setLi] = useState<string[]>(); // 렌더링할 list
  const [select, setSelect] = useState('');
  // const [depth, setDepth] = useState(childrenIndex);
  useEffect(() => {
    // 루트 stepper 일때.
    if (childrenIndex === 0) {
      setLi(Object.keys(updateList));
      if (li) {
        setSelect(li[0]);
      }
    } else {
      // 루트 stpper 가 아닐때.
      const key = Object.keys(updateList);
      if (key) {
        setSelect(key[0])
      }
    }
  }, [])

  const getRecursiveValue = (data: any, childrenIndex: number, currentDepth: number = 0): any => {
    if (Array.isArray(data)) {
      if (currentDepth === childrenIndex) {
        return data;
      } else {
        return data.flatMap(item => getRecursiveValue(Object.values(item)[0], childrenIndex, currentDepth + 1));
      }
    }
    if (typeof data === 'object') {
      return Object.keys(data).flatMap(key =>
        getRecursiveValue(data[key], childrenIndex, currentDepth)
      );
    }
    return [];
  };

  const getFilteredValue = (childrenIndex: number) => {
    const groupData = updateList;
    return getRecursiveValue(groupData, childrenIndex);
  };


  if (childrenIndex) {
    const filteredValue = getFilteredValue(childrenIndex);
    console.log('chi : ', childrenIndex, filteredValue);
  }

  const getValuesByKey2 = (key: string) => {
    // updateList 배열을 순회하면서, key에 해당하는 값을 찾아서 반환
    for (let item of updateList[groupName]['arr'] as any) {
      if (item[key]) {
        return Object.keys(item[key]);  // 해당 key의 첫 번째 depth인 '0-a', '0-b' 등을 반환
      }
    }
    return [];  // 해당 key가 없으면 빈 배열 반환
  };

  const onSelect = (value: string) => {
    // setSelect(value);
    // console.log('value: ', value)
    console.log('value: ', getValuesByKey2(value))
    if (childrenIndex) {
      setUpdateList(groupName, childrenIndex, getValuesByKey2(value))
    }
    // NOTE: 한번에 전체 데이터 가욜때
    if (!data) {

    }

    // 받은 데이터가 있다면 받은 데이터 안에서 key value 추출.
  }
  // console.log('name: ', childrenIndex, updateList, groupName, initSelect)
  // console.log('list: ', updateList)

  // const initText = updateList[groupName]['arr']


  // console.log('init : ', Object.keys(updateList[groupName]['arr']))

  return (
    <div className={classNames([s.stepper], {
      'is_open': show
    })}>
      {/* <span onClick={() => setShow(!show)}>초기값? 몇번째야? {childrenIndex} 번째 </span> */}
      <span onClick={() => setShow(!show)}>{li && li[0]} / {childrenIndex} 번째 </span>
      {show &&
        <ul>
          {
            li?.map((item: string, index: number) => (
              <li key={index} onClick={() => onSelect(item)}>{item}</li>
            ))
          }
        </ul>
      }
    </div>
  );
};

export default StepperItem;
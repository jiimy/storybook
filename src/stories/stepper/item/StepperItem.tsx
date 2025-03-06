import React, { useEffect, useState } from 'react';
import { useStepper } from '../Stepper';
import s from '../stepper.module.scss';
import classNames from 'classnames';

type stepperType = {
  childrenIndex?: number
  data?: any
}

const StepperItem = ({ childrenIndex = 0, data }: stepperType) => {
  const { updateList, groupName, initSelect, setUpdateList, selectedKeys, setSelectedKeys } = useStepper();
  const [show, setShow] = useState(false);

  const [subItems, setSubItems] = useState<string[]>([]); // 현재 단계의 하위 항목들
  const [selectedKey, setSelectedKey] = useState<string>(selectedKeys[childrenIndex] || ''); // 선택된 키

  useEffect(() => {
    let tempData = data;
    let currentDepth = 0;

    // childrenIndex에 맞는 데이터를 탐색
    while (currentDepth < childrenIndex) {
      const selectedKey = selectedKeys[currentDepth];
      if (selectedKey && tempData[selectedKey]) {
        tempData = tempData[selectedKey];
      } else {
        break;
      }
      currentDepth++;
    }

    // 탐색된 data의 하위 항목을 설정
    if (Array.isArray(tempData)) {
      // 배열인 경우 첫 번째 객체의 키들을 가져옴
      setSubItems(Object.keys(tempData[0]));
    } else if (typeof tempData === 'object') {
      // 객체인 경우 키들을 가져옴
      setSubItems(Object.keys(tempData));
    } else if (Array.isArray(tempData)) {
      // 마지막 depth의 배열인 경우
      setSubItems(tempData);
    }
  }, [data, childrenIndex, selectedKeys]); // data나 childrenIndex가 바뀔 때마다 실행

  const handleKeyChange = (key: string) => {
    setSelectedKey(key);
    setSubItems([]); // 하위 항목들을 초기화
    setSelectedKeys(prev => {
      const newKeys = [...prev];
      newKeys[childrenIndex] = key;
      return newKeys;
    });
  };

  useEffect(() => {
    console.log('cc1 : ', selectedKey, subItems, selectedKeys)
  }, [selectedKey, subItems, selectedKeys])

  const previousSelectedKey = childrenIndex > 0 ? selectedKeys[childrenIndex - 1] : undefined;

  useEffect(() => {
    console.log('chi: ', previousSelectedKey, childrenIndex);
    setSelectedKey(subItems[0]);
  }, [previousSelectedKey, childrenIndex, subItems])

  return (
    <div className={classNames([s.stepper], {
      'is_open': !show
    })}>
      <span onClick={() => setShow(!show)}>{selectedKey || subItems[0]} / {childrenIndex} 번째 </span>
      {show &&
        <ul>
          {
            subItems?.map((item: string, index: number) => (
              <li key={index} onClick={() => handleKeyChange(item)}>{item}</li>
            ))
          }
        </ul>
      }
    </div>
  );
};

export default StepperItem;
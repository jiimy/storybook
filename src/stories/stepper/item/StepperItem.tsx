import React, { useEffect, useState } from 'react';
import { useStepper } from '../Stepper';
import s from '../stepper.module.scss';
import classNames from 'classnames';

type stepperType = {
  childrenIndex?: number;
  data?: any;
};

const StepperItem = ({ childrenIndex = 0, data }: stepperType) => {
  const { selectedKeys, setSelectedKeys } = useStepper();
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
    }
  }, [data, childrenIndex, selectedKeys]); // data나 childrenIndex가 바뀔 때마다 실행

  // 항목 선택 시 호출되는 함수
  const handleKeyChange = (key: string) => {
    setSelectedKey(key); // 현재 선택된 키를 업데이트
    setSelectedKeys(prev => {
      const newKeys = [...prev];
      newKeys[childrenIndex] = key; // 현재 childrenIndex에 해당하는 키를 업데이트

      // 다음 단계의 selectedKey를 초기화 (첫 번째 항목으로 설정)
      if (childrenIndex < newKeys.length - 1) {
        newKeys[childrenIndex + 1] = '';
      }

      return newKeys;
    });
    setShow(false); // 선택 후 드롭다운 닫기
  };

  // selectedKeys가 변경될 때 selectedKey 동기화
  useEffect(() => {
    setSelectedKey(selectedKeys[childrenIndex] || '');
  }, [selectedKeys, childrenIndex]);

  // subItems가 변경되면 첫 번째 항목을 기본값으로 설정
  useEffect(() => {
    if (subItems.length > 0 && !selectedKey) {
      const firstItem = subItems[0];
      setSelectedKey(firstItem);
      setSelectedKeys(prev => {
        const newKeys = [...prev];
        newKeys[childrenIndex] = firstItem;
        return newKeys;
      });
    }
  }, [subItems, childrenIndex, selectedKey, setSelectedKeys]);

  return (
    <div className={classNames([s.stepper], { is_open: !show })}>
      {/* 선택된 값을 span에 표시 */}
      <span onClick={() => setShow(!show)}>
        {selectedKey || '선택하세요'}
      </span>
      {show && (
        <ul>
          {subItems?.map((item: string, index: number) => (
            <li key={index} onClick={() => handleKeyChange(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StepperItem;
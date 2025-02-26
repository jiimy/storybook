import React, { useState } from 'react';
import { useStepper } from '../Stepper';
import s from '../stepper.module.scss';
import classNames from 'classnames';

type stepperType = {
  index?: number
}

const StepperItem = ({ index }: stepperType) => {
  const [show, setShow] = useState(false);
  const { list, select } = useStepper();

  const onSelect = (value: string) => {
    select(value);
  }
  return (
    <div className={classNames([s.stepper], {
      'is_open': show
    })}>
      <span onClick={() => setShow(!show)}>초기값? 몇번째야? {index} 번째 </span>
      {show &&
        <ul>
          {list ?
            list?.map((item, index) => (
              <li onClick={() => onSelect(item)}>{item}</li>
            )) :
            <li>데이터가 없습니다.</li>
          }
        </ul>
      }
    </div>
  );
};

export default StepperItem;
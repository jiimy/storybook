import React, { useEffect, useState } from 'react';

type stepperType = {
  initData: any; // 초기데이터
  depth?: number; // 보여줄 단계. 없다면 받은값 자동 depth 계산
  selected: React.Dispatch<React.SetStateAction<string[]>>; // 선택한 값.
  nsxtSelect?: boolean; // 한번에 depth만큼의 select ui를 다 보여줄지 여부
}

const Stepper2 = ({ initData, depth = 3, selected, nsxtSelect }: stepperType) => {
  const [steps, setSteps] = useState<string[]>(Array(depth).fill(''));
  const [options, setOptions] = useState<string[][]>(Array(depth).fill([]));
  console.log('nsxtSelect: ', nsxtSelect);

  useEffect(() => {
    let currentOptions = initData;
    const newOptions = [];
    for (let i = 0; i < depth; i++) {
      if (i === 0) {
        newOptions.push(Object.keys(currentOptions));
      } else {
        currentOptions = currentOptions[steps[i - 1]] || {};
        newOptions.push(Array.isArray(currentOptions) ? currentOptions : Object.keys(currentOptions));
      }
    }
    setOptions(newOptions);
    selected(steps.filter(step => step));
  }, [steps]);

  useEffect(() => {
    if (steps[0] === '' && options[0].length > 0) {
      handleChange(0, options[0][0]);
    }
  }, [options]);

  useEffect(() => {
    if (steps[1] === '' && options[1].length > 0) {
      handleChange(1, options[1][0]);
    }
  }, [options[1]]);

  const handleChange = (index: number, value: string) => {
    setSteps((prev) => {
      const newSteps = [...prev.slice(0, index), value, ...Array(depth - index - 1).fill('')];
      return newSteps;
    });
  };

  return (
    <div>
      {options.map((opts, index) => (
        <div key={index} style={{ display: nsxtSelect || index <= steps.filter(step => step).length ? 'block' : 'none' }}>
          <label>Step {index + 1}: Select Option</label>
          <select
            value={steps[index] || opts[0] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
          >
            {opts.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      {/* {steps.filter(step => step).length === depth && <div>Selected Item: {steps[steps.length - 1]}</div>} */}
    </div>
  );
};

export default Stepper2;
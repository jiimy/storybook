import React, { useRef } from 'react';
import { useOutOfClick } from './useOutOfClick';
import s from './dropdown.module.scss';

type DropDownProps = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  item: any[];
  className?: string;
}

const DropDown = ({ toggle, setToggle, className, item }: DropDownProps) => {
  const targetRef = useRef(null);
  const handleClick = () => {
    setToggle(!toggle);
  };

  useOutOfClick(targetRef, () => {
    setToggle(false);
  });


  return (
    <div className={s.dropdown} ref={targetRef}>
      {/* <div className={`${className} test1`} onClick={handleClick}>클릭</div> */}
      <div className={`${s.btn} ${className} `} onClick={handleClick}>클릭</div>
      {toggle && (
        <ul>
          {item.map(child => (
            <li>{child}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
export type { DropDownProps }
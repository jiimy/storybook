import React, { useRef } from 'react';
import { useOutOfClick } from './useOutOfClick';
import s from './dropdown.module.scss';

type DropDownProps = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  item: any[];
}

const DropDown = ({ toggle, setToggle, item }: DropDownProps) => {
  const targetRef = useRef(null);
  const handleClick = () => {
    setToggle(!toggle);
  };

  useOutOfClick(targetRef, () => {
    setToggle(false);
  });


  return (
    <div className={s.dropdown} ref={targetRef}>
      <div className={s.btn} onClick={handleClick}>클릭</div>
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
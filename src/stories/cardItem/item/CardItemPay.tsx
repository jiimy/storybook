import React from 'react';
import s from '../carditem.module.scss';

const CardItemPay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.pay}>
      {children}
    </div>
  );
};

export default CardItemPay;
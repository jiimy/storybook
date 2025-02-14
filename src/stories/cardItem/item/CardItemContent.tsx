import React from 'react';
import s from '../carditem.module.scss';

const CardItemContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.content}>
      {children}
    </div>
  );
};

export default CardItemContent;
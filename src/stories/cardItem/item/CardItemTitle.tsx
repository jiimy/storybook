import React from 'react';
import s from '../carditem.module.scss';

const CardItemTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.title}>
      {children}
    </div>
  );
};

export default CardItemTitle;
import React from 'react';
import s from '../carditem.module.scss'

const CardItemRecruit = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.recruit}>
      {children}
    </div>
  );
};

export default CardItemRecruit;
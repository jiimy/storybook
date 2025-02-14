import React from 'react';
import s from '../carditem.module.scss';

const CardItemSchedule = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.schedule}>
      {children}
    </div>
  );
};

export default CardItemSchedule;
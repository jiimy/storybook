import React from 'react';
import s from './animationTimeline.module.scss';
import './animationTimelineTest.scss'
import classNames from 'classnames';

type AnimationTimelineProps = {
  children: React.ReactNode;
  className?: string;
};

const AnimationTimeline = ({ children, className }: AnimationTimelineProps) => {
  return (
    <div className={classNames('', className)}>
      {children}
      <div className={s.stretcher}></div>
    </div>
  );
};

export default AnimationTimeline;
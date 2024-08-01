import React, { createContext, useContext, useState } from 'react';
import CounterButton from './item/CounterButton';
import CounterStatus from './item/CounterStatus';
import s from './counter.module.scss';

type counterType = {
  children: React.ReactNode,
  initValue: number,
  minimum: number;
  maximum: number;
  className?: string;
}

type CounterContextType = {
  value: number,
  increment: () => void,
  decrement: () => void,
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("Counter Context가 없습니다.");
  }
  return context;
}

const Counter = ({ children, initValue, minimum, maximum, className }: counterType) => {
  const [count, setCount] = useState(initValue);

  const increment = () =>
    setCount((prev) => {
      if (maximum === undefined) {
        return prev + 1;
      } else {
        return prev < maximum ? prev + 1 : prev;
      }
    });

  const decrement = () =>
    setCount((prev) => {
      if (minimum === undefined) {
        return prev - 1;
      } else {
        return prev > minimum ? prev - 1 : prev;
      }
    });

  return (
    <CounterContext.Provider value={{ value: count, increment, decrement }}>
      <div className={`${s.counter} ${className}`}>{children}</div>
    </CounterContext.Provider>
  );
};

Counter.Button = CounterButton;
Counter.Status = CounterStatus;

export default Counter;
export type { counterType }
import { useCounter } from "../Counter";

type buttonType = {
  children: React.ReactNode,
  type: 'increment' | 'decrement'
}

const CounterButton = ({ children, type }: buttonType) => {
  const { increment, decrement } = useCounter();
  return (
    <button onClick={type === "increment" ? increment : decrement}>
      {children}
    </button>
  );
}

export default CounterButton;

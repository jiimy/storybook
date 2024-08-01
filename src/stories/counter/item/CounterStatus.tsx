import { useCounter } from "../Counter";

const CounterStatus = () => {
  const { value } = useCounter();
  return (
    <div>
      <input value={value} />
    </div>
  );
};

export default CounterStatus;

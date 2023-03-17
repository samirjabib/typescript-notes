import { ReactNode } from "react";
type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

export const Counter = ({ children, setCount }: CounterProps) => {
  return (
    <div>
      {children}
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
    </div>
  );
};

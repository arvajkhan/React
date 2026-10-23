import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const multiple = () => {
    setCount(count * count)
  };
  const devide = () => {
    setCount(count )
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={multiple}>Multiple</button>
    </div>
  );
}
export default Counter;

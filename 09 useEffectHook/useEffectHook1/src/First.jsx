import { useState, useEffect } from "react";

function First() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // useEffect(() => {
  //   console.log("Component Re-rendered!");
  // });

  // useEffect(() => {
  //   console.log("Component Re-rendered!");
  // }, []);
  // useEffect(() => {
  //   console.log("Component Re-rendered!");
  // }, [count]);
  //   useEffect(() => {
  //   console.log("Component Re-rendered!");
  // }, [name]);
  useEffect(() => {
    console.log("Component Re-rendered!");
  }, [name, count]);
  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default First;

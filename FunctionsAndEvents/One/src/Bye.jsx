import { useState } from "react";
import "./App.css";
function Bye() {
    // const [inputValue, setInputValue] = useState("");
  function handleClick() {
    alert("Button was clicked!");
  }
  function handleInput(event) {
    console.clear()
    console.log("Value : ", event.target.value);
  }
  // function handleInput(event) {
  //   setInputValue(event.target.value);
  // }
  return (
    <>
      <button onClick={handleClick} className="btn">
        Click me
      </button>
      <br />
      <button onClick={() => alert("Hello from inline function!")}>
        Inline Function
      </button>
      <input type="text" onChange={handleInput} placeholder="Type Something" />
      {/* <h2>Value: {inputValue}</h2> */}
      <br/>
      <h1>This is good</h1>
    </>
  );
}

export default Bye;

import { useState } from "react";
function InputExample() {
  const [name, SetName] = useState("");

  return (
    <div>
      <input type="text" value={name} onChange={ (e) => SetName(e.target.value)}/>
      <p>Grade : {name || "Guest"}</p>
    </div>
  );
}
export default InputExample;

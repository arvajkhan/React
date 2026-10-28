import { useState } from "react";
function ToggleText() {
  const [isVisible, SetIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => SetIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p>This is Secret</p>}
    </div>
  );
}
export default ToggleText;

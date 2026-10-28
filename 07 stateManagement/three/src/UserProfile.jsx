import { useState } from "react";
function UserProfile() {
  const [name, SetName] = useState("Guest");
  const [age, SetAge] = useState(18);

  return (
    <div>
      <h2>Name : {name}</h2>
      <h3>Age : {age}</h3>
      {/* <button onClick={() => SetName("Arvaj")}>Change Name</button> */}
      {/* <button onClick={() => SetAge(age + 1)}> Change Age</button> */}
      <button onClick={() => SetName(prompt("Enter your name"))}>
        Change Name
      </button>
      <button onClick={() => SetAge(prompt("Enter your Age"))}>
        Change Name
      </button>
    </div>
  );
}
export default UserProfile;

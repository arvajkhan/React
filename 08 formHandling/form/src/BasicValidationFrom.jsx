import { use, useState } from "react";
function BasicValidationform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError("Please fill all fields!");
    } else {
      setError("");
      console.log("form Submited :", { name, email });
      alert("form submitted successfully!");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Basic Validation form</h2>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
export default BasicValidationform;

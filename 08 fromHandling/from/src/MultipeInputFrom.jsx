import { useState } from "react";
function MultiInputFrom() {
  const [formData, setFromData] = useState({ name: "", email: "", age: "" });

  const formHandlinng = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) =>{
   setFromData((prev ) => {

   })
  }
  return (
    <form onSubmit={formHandlinng}>
      <h2>Multiple Input Form</h2>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}/>
      <br />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
      <br />
      <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange}/>
      <br />
    </form>
  );
}

export default MultiInputFrom;

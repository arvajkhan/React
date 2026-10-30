import { useState } from "react";
function Student() {
  const [student, SetStudent] = useState({
    name: "Arvaj khan",
    grade: "A+",
    city: "Mathura",
  });

  //! Change City
  // const changeCity = () => {
  //   SetStudent({ ...student, city: "Mumbai" });
  // };

  //! Change Name
  //   const changeName = () => {
  //   SetStudent({ ...student, name: "Shahil Khan" });
  // };

  //! Change Grade
  //   const changeGrade = () => {
  //   SetStudent({ ...student, grade: "A" });
  // };

const changeName = () => {
  const name  = prompt("Enter your city");

  if (name) {
    SetStudent({ ...student, name: name });
  }
};

const changeGrade = () => {
  const grade = prompt("Enter your city");

  if (grade) {
    SetStudent({ ...student, grade: grade });
  }
};
const changeCity = () => {
  const city = prompt("Enter your city");

  if (city) {
    SetStudent({ ...student, city: city });
  }
};
  return (
    <div>
      <h2>Name : {student.name}</h2>
      <p>Grade : {student.grade}</p>
      <p>City : {student.city}</p>
       <button onClick={changeName}> Change Name</button>
        <button onClick={changeGrade}> Change Grade</button>
      <button onClick={changeCity}> Change City</button>
    </div>
  );
}
export default Student;

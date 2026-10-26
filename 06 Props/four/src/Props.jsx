import Student from "./Data.js";
import "./App.css";
function Props() {
  return (
    <div>
      <h1>Student Management System</h1>
      <div className="main">
        {Student.map((student) => (
          <div key={student.id}>
            <div className="card">
              <img src={student.logo} alt={student.name} width="100" />
              <h2>{student.name}</h2>
              <p>Age: {student.age}</p>
              <p>Course: {student.Course}</p>
              <p>Branch: {student.Branch}</p>
              <p>Father: {student.fatherName}</p>
              <p>Address: {student.Address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Props;

import Props from "./Props";
import students from "./data";
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f1f5f9",
      }}
    >
      {students.map((student) => (
        <Props
          key={student.id}
          name={student.name}
          age={student.age}
          course={student.course}
          branch={student.branch}
          address={student.address}
          image={student.image}
        />
      ))}
    </div>
  );
}

export default App;

import "./App.css";
function Props(props) {
  return (
    <>
      <div className="cards-container">
        <div className="card">
          <img src={props.imageUrl} alt="" />
          <h2>Name: {props.name} </h2>
          <h2>Age: {props.age} </h2>
          <h2>Course: {props.course} </h2>
          <h2>Address: {props.city}</h2>

        </div>
      </div>
    </>
  );
}

export default Props;

function Props(props) {
  return (
    <div style={{height: "450px", width: "300px", border: "2px solid black", borderRadius: "10px", textAlign: "center"}}>
      <h2>This is Props</h2>
      <img src={props.image} alt={props.name}  width="200" style={{borderRadius: "50%", height: "200px"}}/>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
      <p>Branch: {props.branch}</p>
      <p>Address: {props.address}</p>
    </div>
  );
}

export default Props;

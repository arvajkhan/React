function Object(){
  const obj = {firstName: "Arvaj",lastName: "khan", age: 25, college: "xyz"}
  return(
    <>
    <h2>Student Details</h2>
    <p>first Name : {obj.firstName} </p>
    <p>Last Name : {obj.lastName} </p>
    <p>Age : {obj.age} </p>
    <p>College : {obj.college} </p>
    </>
  )
}
export default Object



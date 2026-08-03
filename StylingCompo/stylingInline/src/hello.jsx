import './app.css'

function Hello() {
  const name = "Arvaj Khan"

  // const headingStyle = {
  //   color: "red",
  //   textAlign: "center",
  //   backgroundColor: "pink",
  //   fontSize: "40px",
  //   marginTop: "30px",
  //   borderRadius: "10px"
  // }
  // return <h2 style={headingStyle}>Hello {name}</h2>
  return <h2 style={{  color: "red",
    textAlign: "center",
    backgroundColor: "pink",
    fontSize: "40px",
    marginTop: "30px",
    borderRadius: "10px"}}>Hello {name}</h2>
}
export default Hello;
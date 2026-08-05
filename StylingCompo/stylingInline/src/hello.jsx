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
  // return <h2 style={{  color: "red",
  //   textAlign: "center",
  //   backgroundColor: "pink",
  //   fontSize: "40px",
  //   marginTop: "30px",
  //   borderRadius: "10px"}}>Hello {name}</h2>

  return (
    <>
    <h1 className='heading'>Hello {name} </h1>
    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam laboriosam, excepturi recusandae architecto delectus sequi beatae repellat officia accusantium eveniet vitae consequatur, voluptate inventore veniam quo debitis aspernatur reprehenderit! Iusto, itaque ratione asperiores necessitatibus, quod aperiam molestiae reiciendis vel voluptatem, architecto vero mollitia tempore.</p>
    </>
  )
}
export default Hello;
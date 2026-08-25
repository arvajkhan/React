function Login(){
  const isLoggedIn = false
  let message; 
  if(isLoggedIn){
    message = <h1>Welcome User!</h1>
  }else{
    message = <h2>please login</h2>
  } 
  return (
    <div>
      {message}
    </div>
  )
}

export default Login
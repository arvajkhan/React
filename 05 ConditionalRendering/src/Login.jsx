// function Login() {
//   const isLoggedIn = flase;
//   let message;
//   if (isLoggedIn) {
//     message = <h1>Welcome User!</h1>;
//   } else {
//     message = <h2>please login</h2>;
//   }
//   return <div>{message}</div>;
// }
// function Login() {
//   const isLoggedIn = true;
//   let message;
//   if (isLoggedIn) {
//     message = <h1>Welcome User!</h1>;
//   } else {
//     message = <h2>please login</h2>;
//   }
//   return <div>{message}</div>;
// }

function Login(){
  const isLoggedIn = false;
  return(
    <div>{isLoggedIn ? <h1>Welcome User</h1> : <h2>please Login</h2> }</div>
  )
}
export default Login;

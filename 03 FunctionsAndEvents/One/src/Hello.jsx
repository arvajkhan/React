// function Hello() {
//   function getName(yourName) {
//     return yourName;
//   }

//   const name = "Arvaj khan"
//   const name1 = "Shahil khan"
//   return (
//     <>
//       <h1>Hello {getName(name)}</h1>
//       <h2>Bye {getName(name1)} </h2>
//       <h3>By the I am {name} </h3>
//     </>
//   );
// }

function Hello() {
  const getName = (yourName) => {
    return yourName;
  };

  const name = "Arvaj khan";
  const name1 = "Shahil khan";

  return (
    <>
      <h1>Hello {getName(name)}</h1>
      <h2>Bye {getName(name1) }</h2>
    </>
  );
}

export default Hello;

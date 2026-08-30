function Array() {
  const fruits = ["Apple", "Mango", "Oranges"];

  return (
    <>
    {/* 1st Method */}
      {/* <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) =>(
          <li>{index} - {fruit} </li>
         ))}
      </ul> */}
      {/* 2nd method */}
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li>
              {index} - {fruit}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Array;

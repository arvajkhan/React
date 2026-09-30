// import "./App.css";
// function Props(props) {
//   return (
//     <>
//       <div className="cards-container">
//         <div className="card">
//           <img src={props.imageUrl} alt="" />
//           <h2>Name: {props.name} </h2>
//           <h2>Age: {props.age} </h2>
//           <h2>Course: {props.course} </h2>
//           <h2>Address: {props.city}</h2>

//         </div>
//       </div>
//     </>
//   );
// }


// import "./App.css";
// function Props(props) {
// const { name, age, city, course, imageUrl } = props;
//   return (
//     <>
//       <div className="cards-container">
//         <div className="card">
//           <img src={imageUrl} alt="" />
//           <h2>Name: {name} </h2>
//           <h2>Age: {age} </h2>
//           <h2>Course: {course} </h2>
//           <h2>Address: {city}</h2>

//         </div>
//       </div>
//     </>
//   );
// }

// import "./App.css";
// function Props({ name, age, city, course, imageUrl }) {

//   return (
//     <>
//       <div className="cards-container">
//         <div className="card">
//           <img src={imageUrl} alt="" />
//           <h2>Name: {name} </h2>
//           <h2>Age: {age} </h2>
//           <h2>Course: {course} </h2>
//           <h2>Address: {city}</h2>

//         </div>
//       </div>
//     </>
//   );
// }


//? defualt Value 

// import "./App.css";
// function Props({ name="Guest", age="18", city="California", course="M.tech", imageUrl="https://i.pinimg.com/474x/a8/59/7e/a8597e8ba8f7009b289a854aaee24736.jpg?nii=t", hobbies=[]} ) {

//   return (
//     <>
//       <div className="cards-container">
//         <div className="card">
//           <img src={imageUrl} alt="" />
//           <h2>Name: {name} </h2>
//           <h2>Age: {age} </h2>
//           <h2>Course: {course} </h2>
//           <h2>Address: {city}</h2>
//           <h2>Hobbies:</h2> <ul> {hobbies.map((hobby, index) => ( <li key={index}>{hobby}</li> ))} </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Props;


import "./App.css";
import Button from "./button";

function Props({
  name = "Guest",
  age = 18,
  city = "California",
  course = "M.Tech",
  imageUrl = "https://i.pinimg.com/474x/a8/59/7e/a8597e8ba8f7009b289a854aaee24736.jpg?nii=t",
  hobbies = [],
  buttonLabel = "Click Me",
  handleClick
}) {
  return (
    // <div className="cards-container">
      <div className="card">
        <img src={imageUrl} alt="" />

        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Course: {course}</h2>
        <h2>Address: {city}</h2>

        <h2>Hobbies:</h2>

        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>

        {/* Button */}
        <Button
          label={buttonLabel}
          handleClick={handleClick}
        />
      </div>
    // </div>
  );
}

export default Props;
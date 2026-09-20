import Props from "./Props";
function App() {
  return (
    <>
      <Props
        imageUrl="https://media.istockphoto.com/id/1438185814/photo/college-student-asian-man-and-studying-on-laptop-at-campus-research-and-education-test-exam.jpg?s=612x612&w=0&k=20&c=YmnXshbaBxyRc4Nj43_hLdLD5FLPTbP0p_3-uC7sjik="
        name="Arvaj khan"
        age={24}
        city="Kasganj"
        course="B.tech"
      />
      <br />
      <Props
        imageUrl="https://t4.ftcdn.net/jpg/05/76/75/39/360_F_576753965_UPYWF1GHjZuQfQo0Qupv776ubn5uWaiJ.jpg"
        name="Shahil khan"
        age={21}
        city="Mathura"
        course="BCA"
      />
    </>
  );
}
export default App;

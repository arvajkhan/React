import "./App.css";

function Visible() {
  const isVisible = true;

  return (
    <div>
      <h1 className={isVisible ? "visible" : "unvisible"}>Conditional Rendering</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum amet
        debitis saepe id maiores quam tenetur labore accusamus maxime! Accusamus
        delectus velit neque blanditiis voluptatibus maiores, voluptatum eos
        cupiditate?
      </p>
    </div>
  );
}

export default Visible;

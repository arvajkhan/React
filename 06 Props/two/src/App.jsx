import Card from "./Card";
import "./App.css";

function App() {
  return (
    <div className="cards-container">

      <Card
        image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        title="Premium Watch"
        description="Stylish premium watch with modern design."
        price="2999"
      />

      <Card
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        title="Running Shoes"
        description="Comfortable shoes for daily running."
        price="1999"
      />

      <Card
        image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
        title="Camera"
        description="Capture beautiful moments with this camera."
        price="4999"
      />
       <Card
        image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
        title="Camera"
        description="Capture beautiful moments with this camera."
        price="4999"
      />


    </div>
  );
}

export default App;
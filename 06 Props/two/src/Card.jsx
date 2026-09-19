function Card({ image, title, description, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <h2>{title}</h2>

      <p>{description}</p>

      <div className="price">₹{price}</div>

      <button>Add to Cart</button>
    </div>
  );
}

export default Card;
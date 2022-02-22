import { Link } from "react-router-dom";

function Adventure(props) {
  const { name, rating, price, id } = props.adventure;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="Adventure">
      <Link to={`/adventures/${id}`}>
        <img
          src="https://media.istockphoto.com/photos/bungee-jumping-picture-id547436912?s=612x612"
          alt={name}
        />
        <h1>{name}</h1>
        <p>{rating}</p>
        <p>{price}</p>
      </Link>
      <button onClick={() => handleAddToCart(props.adventure)}>
        Add to Cart
      </button>
    </div>
  );
}

export default Adventure;

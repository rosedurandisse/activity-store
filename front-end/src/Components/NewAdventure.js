import axios from "axios";
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewAdventure() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [adventure, setAdventure] = useState({
    name: "",
    description: "",
    price: "",
    rating: "",
    adrenaline_approved: false,
  });

  const handleTextChange = (event) => {
    event.target.id === "name" || "description"
      ? setAdventure({ ...adventure, [event.target.id]: event.target.value })
      : setAdventure({
          ...adventure,
          [event.target.id]: Number(event.target.value),
        });
  };

  const handleCheckboxChange = () => {
    setAdventure({
      ...adventure,
      adrenaline_approved: !adventure.adrenaline_approved,
    });
  };

  const newAdventure = (addedAdventure) => {
    axios
      .post(`${API}/adventures`, addedAdventure)
      .then(() => {
        navigate("/adventures");
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newAdventure(adventure);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={adventure.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Adventure"
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={adventure.description}
          type="text"
          onChange={handleTextChange}
          placeholder="Description of Adventure"
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          value={adventure.price}
          type="number"
          onChange={handleTextChange}
          placeholder="Price of Adventure"
          required
        />

        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          value={adventure.rating}
          type="number"
          onChange={handleTextChange}
          placeholder="Rating of Adventure"
          required
        />

        <label htmlFor="adrenaline_approved">Adrenaline Approved:</label>
        <input
          id="adrenaline_approved"
          checked={adventure.adrenaline_approved}
          type="checkbox"
          onChange={handleCheckboxChange}
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/snacks/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default NewAdventure;

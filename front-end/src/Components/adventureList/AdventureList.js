import axios from "axios";
import { useState, useEffect } from "react";
import Adventure from "../adventureCard/AdventureCard";
import SearchBar from "../searchBar/searchBar";

function AdventureList(props) {
  const { handleAddToCart } = props.props;
  const API = process.env.REACT_APP_API_URL;
  const [adventures, setAdventures] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/adventures`)
      .then((response) => setAdventures(response.data))
      .catch((error) => console.log(error));
  }, [API]);

  let filteredAdventures = adventures;

  if (searchTerm) {
    filteredAdventures = adventures.filter((adventure) => {
      const adventureLowerCased = adventure.name.toLowerCase();
      const searchTermLowerCased = searchTerm.toLowerCase();
      return adventureLowerCased.includes(searchTermLowerCased);
    });
  }

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <section className="Adventures col-2">
        {filteredAdventures.map((adventure) => {
          return (
            <Adventure
              key={adventure.id}
              adventure={adventure}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </section>
    </div>
  );
}
export default AdventureList;

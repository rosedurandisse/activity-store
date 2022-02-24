import axios from "axios";
import { useState, useEffect } from "react";
import Adventure from "./Adventure";

function Adventures(props) {
  const { handleAddToCart } = props.props;
  const API = process.env.REACT_APP_API_URL;
  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/adventures`)
      .then((response) => setAdventures(response.data))
      .catch((error) => console.log(error));
  }, [API]);
  console.log(adventures);
  return (
    <div>
      <section className="Adventures col-2">
        <article>
          {adventures.map((adventure) => {
            return (
              <Adventure
                key={adventure.id}
                adventure={adventure}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </article>
      </section>
    </div>
  );
}
export default Adventures;

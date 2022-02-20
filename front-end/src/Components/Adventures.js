import axios from "axios";
import { useState, useEffect } from "react";
import Adventure from "./Advenuture";

function Adventures() {
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
      <section>
        {" "}
        {adventures.map((adventure) => {
          return <Adventure key={adventure.id} adventure={adventure} />;
        })}
      </section>
    </div>
  );
}
export default Adventures;

import { Link } from "react-router-dom";

function Adventure({ adventure }) {
  return (
    <div>
      <Link to={`/adventures/${adventure.id}`}>
        <h1>{adventure.name}</h1>
      </Link>
    </div>
  );
}

export default Adventure;

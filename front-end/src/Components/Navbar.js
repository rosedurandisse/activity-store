import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/adventures">Choose Your Own Adventure</Link>
      <Link to="/new">Make a New Adventure</Link>
    </div>
  );
}

export default NavBar;

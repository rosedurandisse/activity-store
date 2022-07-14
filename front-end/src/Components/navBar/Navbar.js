import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchBar";

function NavBar(props) {
  const { countCartItems, searchTerm, setSearchTerm } = props;
  return (
    <nav>
      <div>
        <Link to="/adventures">Choose Your Own Adventure</Link>
      </div>
      <div>
        <Link to="/new">Make a New Adventure</Link>
      </div>
      <div>
        <Link to="/cart">
          What's in Your Bag?
          {countCartItems ? (
            <p>
              {" "}
              {countCartItems} Adventure{countCartItems > 1 && "s"}
            </p>
          ) : null}
        </Link>
      </div>
      <div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </nav>
  );
}

export default NavBar;

import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        className="searchBar"
        placeholder="Search an activity"
        value={searchTerm}
        onChange={updateSearchTerm}
      ></input>
    </div>
  );
};

export default SearchBar;

import React from "react";
import searchIcon from "./search.svg";

const SearchCard = ({ value, setValue, handleSearch }) => {
  return (
    <div className="search">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Search for movies"
      />
      <img src={searchIcon} onClick={handleSearch} alt="Search" />
    </div>
  );
};

export default SearchCard;

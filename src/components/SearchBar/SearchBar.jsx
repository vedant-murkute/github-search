import { useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({getSearchResults, isLoading, searchQuery, setSearchQuery, setSortOption}) => {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSortOption("best_match");
    getSearchResults(searchQuery);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search string"
          value={searchQuery}
          onChange={handleChange}
          className="search-input"
        />
        <input className="search-btn" type="submit" value="Search Repo" disabled={isLoading} />
      </form>
    </div>
  );
};

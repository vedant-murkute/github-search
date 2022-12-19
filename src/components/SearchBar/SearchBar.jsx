import { useState } from "react";

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
        />
        <input type="submit" value="Submit val" disabled={isLoading} />
      </form>
    </div>
  );
};

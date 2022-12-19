import React from "react";
import { useEffect, useState } from "react";

import Card from "../Card/Card";
import ResultsHeader from "../ResultsHeader/ResultsHeader";
import "./Results.css"
import { sortArray } from "../../utils";

const Results = ({
  data,
  isLoading,
  error,
  setSortOption,
  setSortOrder,
  sortOption,
  sortOrder,
  getSearchResults,
  searchQuery,
}) => {
  const [items, setItems] = useState([]);
  const [bestMatchItems, setBestMatchItems] = useState([]);

  useEffect(() => {
    setItems(data?.items);
    if(sortOption==="best_match"){
      setBestMatchItems(data?.items);
    }
  }, [data])

  useEffect(() => {
    if (
      sortOption === "stars" ||
      sortOption === "best_match" ||
      sortOption === "updated_at"
    ) {
      getSearchResults(searchQuery);
    } else {
      let temp = [...bestMatchItems];
      // console.log(optionsMapping[sortOption]);
      temp = sortArray(temp,sortOption,sortOrder);
      setItems(temp);
      console.log(items);
    }
  }, [sortOrder, sortOption]);

  return (
    <div className="results">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {data && (
            <ResultsHeader
              setSortOption={setSortOption}
              setSortOrder={setSortOrder}
              data={data}
              // handleSort={handleSort}
            />
          )}
          {items &&
            items.map((item, index) => <Card key={index} repo={item} />)}
        </div>
      )}
    </div>
  );
};

export default Results;
//  Stars, watchers count, score, name,created_at, updated_at



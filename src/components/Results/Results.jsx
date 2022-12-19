import React from "react";
import { useEffect, useState } from "react";

import Card from "../Card/Card";
import ResultsHeader from "../ResultsHeader/ResultsHeader";
import { optionsMapping } from "../../constants/options";

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
      console.log(optionsMapping[sortOption]);
      if (sortOrder === "asc") {
        temp.sort(
          (a, b) =>{
            if(sortOption==="created_at"){
              const date_a = new Date(a[optionsMapping[sortOption]]);
              const date_b = new Date(b[optionsMapping[sortOption]]);
              return date_a - date_b;
            }
            else if(setSortOption==="name"){
              return a[optionsMapping[sortOption]].localeCompare(b[optionsMapping[sortOption]]);
            }
            else{
              return a[optionsMapping[sortOption]] - b[optionsMapping[sortOption]];
            }
          }
        );
      } else {
        temp.sort(
          (a, b) =>{
            if(sortOption==="created_at"){
              const date_a = new Date(a[optionsMapping[sortOption]]);
              const date_b = new Date(b[optionsMapping[sortOption]]);
              return date_b - date_a;
            }
            else if(setSortOption==="name"){
              return a[optionsMapping[sortOption]].localeCompare(b[optionsMapping[sortOption]]);
            }
            else{
              return b[optionsMapping[sortOption]] - a[optionsMapping[sortOption]];
            }
          }
        );
      }
      setItems(temp);
      console.log(items);
    }
  }, [sortOrder, sortOption]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {data && (
            <ResultsHeader
              setSortOption={setSortOption}
              setSortOrder={setSortOrder}
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



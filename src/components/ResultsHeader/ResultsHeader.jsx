import { useState } from "react";

const ResultsHeader = ({ setSortOption, setSortOrder, handleSort }) => {
  const [showSortOptions, setShowSortOptions] = useState(false);

  const handleShowClick = (event) => {
    setShowSortOptions(true);
    console.log(event);
  };

  const handleSortClick = (event, param) => {
    setSortOption(event.target.name);
    setSortOrder(param);
    setShowSortOptions(false);
    // handleSort();
  };

  return (
    <div>
      <button name="sort button" type="button" onClick={handleShowClick}>
        {`Sort: $sort type`}
      </button>
      {showSortOptions && <div>
        <button
          name="best_match"
          type="button"
          onClick={(event) => handleSortClick(event, "desc")}
        >
          Best Match
        </button>
        <button
          name="stars"
          type="button"
          onClick={(event) => handleSortClick(event, "desc")}
        >
          Most Stars
        </button>
        <button
          name="updated_at"
          type="button"
          onClick={(event) => handleSortClick(event, "desc")}
        >
          Recently Updated
        </button>
        <button
          name="watchers"
          type="button"
          onClick={(event) => handleSortClick(event, "desc")}
        >
          Most Watchers Count
        </button>
        <button
          name="score"
          type="button"
          onClick={(event) => handleSortClick(event, "desc")}
        >
          Highest Score
        </button>
        <button
          name="name"
          type="button"
          onClick={(event) => handleSortClick(event, "desc")}
        >
          Name - Alphabetic Order
        </button>
        <button
          name="created_at"
          type="button"
          onClick={(event) => handleSortClick(event, "desc")}
        >
          Recently Created
        </button>
      </div>}
    </div>
  );
};

export default ResultsHeader;

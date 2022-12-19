import { useState } from "react";
import { Octokit } from "octokit";

import "./App.css";
import Results from "./components/Results/Results";
import { SearchBar } from "./components";
import { optionsMapping } from "./constants/options";

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const [sortOption, setSortOption] = useState("best_match");
  const [sortOrder, setSortOrder] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async (searchQuery) => {
    setData(null);
    setIsLoading(true);
    const token =
      "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";
    const octokit = new Octokit({
      auth: token,
    });
    console.log(sortOption)
    console.log(optionsMapping[sortOption]);
    const response = await octokit.request("GET /search/repositories", {
      q: encodeURIComponent(searchQuery),
      sort: optionsMapping[sortOption],
      order: sortOrder,
    });
    console.log(response);
    if (response.status !== 200) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    } else {
      return response;
    }
  };

  const getSearchResults = async (searchQuery) => {
    fetchData(searchQuery).then(
      (res) => {
        setIsLoading(false);
        setData(res.data);
      },
      (error) => {
        setIsLoading(false);
        setError(error.message);
        console.log(error);
      }
    );
  };

  return (
    <div className="App">
      <SearchBar
        getSearchResults={getSearchResults}
        isLoading={isLoading}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSortOption={setSortOption}
      />
      <Results
        data={data}
        error={error}
        isLoading={isLoading}
        setSortOption={setSortOption}
        setSortOrder={setSortOrder}
        sortOrder={sortOrder}
        sortOption={sortOption}
        getSearchResults={getSearchResults}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;

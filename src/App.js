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
    const token = process.env.REACT_APP_API_TOKEN;  //this is still visible via inspect, confidential keys still should be in the backend or use Next
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

  //this prop drilling can be avoided by shifting state to child or using composition. Although there are tradeoffs.
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

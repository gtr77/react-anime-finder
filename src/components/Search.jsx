import React, { useState, useEffect } from 'react';
import Header from './Header';
import InputSearch from './InputSearch';
import SearchList from './SearchList';

const Search = () => {

  let [ results, setResults ] = useState([]);
  const [ searchValue, setSearchValue ] = useState("");

  useEffect(() => {
    // const searchParams = 'dragonball';
    if(searchValue.length > 2) {
      const url = `https://api.jikan.moe/v3/search/anime?q=${searchValue}`;
  
      const getShows = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setResults(json.results);
          console.log("SHOWS OUTSEDE", json.results)
        } catch (error) {
          console.error("Error: ", error);
        }
      };
  
      getShows();
    }
    if(!searchValue || searchValue === ""){
      results = [];
    }
  }, [searchValue]);

  const searchFilter = (e) => {
    console.log("IM IN")
    e.preventDefault();
    let text = e.target.value;
    setSearchValue(text)

    if(text.length > 2) {
      setResults(results.slice(0, 10))
    }
    if(!text || text === ""){
      setResults([]);
    }

  }

  return (
    <div>
      <Header>
        <InputSearch 
          currentValue={searchValue} 
          handleChange={searchFilter}
        />
      </Header>
      <SearchList shows={results} searchValue={searchValue}/>
    </div>
  );
};

export default Search;

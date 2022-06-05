import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import InputSearch from '../InputSearch/InputSearch';
import SearchList from './SearchList';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionsCreators } from "./../../state/index";

const Search = () => {

  let [ results, setResults ] = useState([]);
  const [ searchValue, setSearchValue ] = useState("");

  const shows = useSelector((state) => state.shows.results);
  const loading = useSelector((state) => state.shows.loading);
  console.log("shows", shows)
  console.log("loading", loading)
  const dispatch = useDispatch();
  
  const { getShows, setLoading } = bindActionCreators(actionsCreators, dispatch);


  useEffect(() => {
    getShows(searchValue)
    setResults(shows);
    setLoading(true);
    if(searchValue.length > 4 || (searchValue === "")) {
      setLoading(false);
    }
  }, [searchValue]);

  const searchFilter = (e) => {
    e.preventDefault();
    let text = e.target.value;
    setSearchValue(text)

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
      { 
        loading ? 
          <div className='show-card-container'>
            <div className='loader'></div>
          </div> 
          : <SearchList shows={results} searchValue={searchValue}/>
      }
    </div>  
  );
};

export default Search;

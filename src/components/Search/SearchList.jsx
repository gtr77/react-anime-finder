import React, { useState, useEffect, Fragment } from 'react';
import Paginator from '../Paginator/Paginator';
import './search.scss';

const SearchList = ({ shows, searchValue }) => {

  let [ positionStart, setPositionStart ] = useState(0)
  const [ totalShowsAmount, setTotalShowsAmount ] = useState(0)
  const [ pagesAmount, setPagesAmount ] = useState(0)
  const [ roundedPagesAmount, setRoundedPagesAmount ] = useState(0)
  const [ difference, setDifference ] = useState(0)
  const [ showsSelector, setShowsSelector ] = useState([]);
  const [ pagesButtons, setPagesButtons ] = useState([]);
  // const [ shouldShowButtons, setShouldShowButtons ] = useState(false);

  
  const maxShowsPerPage = 7;
  let getShows = [...shows];
  let getShowsLength = getShows.length;
  let getPagesQuantity = Math.floor(getShowsLength / maxShowsPerPage);
  let isolatedShows = getShowsLength % maxShowsPerPage;
  let pages = [];
  
  useEffect(() => {
    setTotalShowsAmount(getShowsLength);
    createPaginator();

    if(isolatedShows !== 0) {
      let newPage = getPagesQuantity + 1;
      setPagesButtons([...pages, newPage])
      // setShowsSelector(getShows.slice(positionStart, getShowsLength));
    }

    if(getShowsLength > 0) {
      setShowsSelector(getShows.slice(positionStart, maxShowsPerPage));
    }

    // SET TIME OUT AND DISPATCH HOOK -> 

    // CUSTOM HOOK A PROPER WAY WHEN YOU STOP TYPING

    
  }, [searchValue]);

  const createPaginator = () => {
    for (let page = 1; page <= getPagesQuantity; page++) {
      pages.push(page)
    }
    setPagesButtons(pages);
  }
  
  //let getAmountButtons = shows.length / maxShowsPerPage;

  // if(totalShowsAmount > 0){
  //   for (let index = 0; index < getAmountButtons; index++) {
  //     pagesButtons.push(index + 1);
  //     // setPagesButtons([...pagesButtons, index + 1])
  //   }
  // } 
  

  // console.log("totalShowsAmount", totalShowsAmount)
  // console.log("pagesAmount", pagesAmount)
  // if(totalShowsAmount > 0 && pagesAmount > 0){
  //   for (let index = 0; index < pagesAmount; index++) {
  //     pagesButtons.push(index + 1);
  //     // setPagesButtons([...pagesButtons, index + 1])
  //   }
  //   //setShouldShowButtons(true);
  // }
  

  
  
  // const getShows = () => {
  //   let slicedPositions, positionEnds;
  //   for (let page = 1; page <= pagesAmount; page++) {
  //     positionEnds = position+maxShowsPerPage;
  //     slicedPositions = shows.slice(position, positionEnds);
  //     setShowsSelector([...showsSelector], slicedPositions)
  //     setPagesButtons([...pagesButtons], page)
  //   }
  //   if(difference !== 0) {
  //     // let getCurrentSelector = [...showsSelector];
  //     setShowsSelector([...showsSelector], slicedPositions)
  //     setPagesButtons([...pagesButtons], roundedPagesAmount+1)
  //     // showsSelector.push(shows.slice(position, totalShowsAmount));
  //     // pagesButtons.push(roundedPagesAmount+1);
  //   } 
  //   return {
  //     pages: pagesButtons,
  //     showsPerPage: showsSelector
  //   };
  // };
  // getShows();

  const getSelectedShows = (id) => {
    let sliceItems = [...shows];
    let slicer, positionEnds;
    setPositionStart(id*maxShowsPerPage);
    positionEnds = positionStart+maxShowsPerPage;
    slicer = sliceItems.slice(positionStart, positionEnds);

    if(id === maxShowsPerPage) {
      positionEnds = getShowsLength;
      slicer = sliceItems.slice(id*maxShowsPerPage, positionEnds);
    }

    console.log("START POSITION ====>", positionStart)
    console.log("ENDS ======> ", positionEnds)
    console.log("SWITCH SLIDER ====>", slicer)
    setShowsSelector(slicer);
    // return slicer;

  }

  return <Fragment>
      <div className='show-card-container'>
        {
          totalShowsAmount > 0 ? showsSelector.map((show,idx) => (
            <div className='show-card' key={idx}>
              <h1>Title: {show.title} </h1>
              <img src={show.image_url} alt="" />
              <p>Synopsis {show.synopsis}</p> 
              <p><strong>{show.score}</strong></p> 
            </div>
          )) : null
        }
      </div>
      <div className='paginator'>
        {
          pagesButtons.map((x, idx) => (
            <Paginator key={idx} page={idx+1} click={() => getSelectedShows(idx)}/>
          ))
        }
      </div>
  </Fragment>;
};

export default SearchList;

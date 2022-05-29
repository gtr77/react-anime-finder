import React, { useState, useEffect } from 'react';

const SearchList = ({ shows, searchValue }) => {

  let [ positionStart, setPositionStart ] = useState(0)
  const [ totalShowsAmount, setTotalShowsAmount ] = useState(0)
  const [ pagesAmount, setPagesAmount ] = useState(0)
  const [ roundedPagesAmount, setRoundedPagesAmount ] = useState(0)
  const [ difference, setDifference ] = useState(0)
  const [ showsSelector, setShowsSelector ] = useState([]);
  const [ pagesButtons, setPagesButtons ] = useState([1,2,3,4,5])

  
  const maxShowsPerPage = 10;
  let getShows = [...shows];

  useEffect(() => {
    setTotalShowsAmount(shows.length);
    setPagesAmount(totalShowsAmount / maxShowsPerPage);
    setDifference(totalShowsAmount % maxShowsPerPage);
    setRoundedPagesAmount(Math.floor(pagesAmount));
    
    // if(searchValue.length > 2){
    setShowsSelector(getShows.slice(0, maxShowsPerPage));
    // }
    
    
  }, [searchValue]);
  
  console.log("setPagesButtons", pagesButtons)
  
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

  const getSelectedShows = (e, id) => {
    e.preventDefault();
    let sliceItems = [...shows];
    let slicer, positionEnds;
    setPositionStart(id*maxShowsPerPage);
    positionEnds = positionStart+maxShowsPerPage;
    slicer = sliceItems.slice(positionStart, positionEnds);
    console.log("START POSITION ====>", positionStart)
    console.log("ENDS ======> ", positionEnds)
    console.log("SWITCH SLIDER ====>", slicer)
    setShowsSelector(slicer);

  }

  return <div>
    <h3>Total: {totalShowsAmount} </h3>
    <h3>pageSelector:  </h3>
      {
        pagesButtons && pagesButtons.length > 0 && pagesButtons.map((x, idx) => {
          return <button onClick={(event) => getSelectedShows(event, idx)}>Pag #{x}</button>
        })
      }  
      {
        totalShowsAmount > 0 ? showsSelector.map((show) => {
          return (
            <div>
              <h1>Title: {show.title} </h1>
              <h2>Synopsis {show.synopsis}</h2> 
              <p><strong>{show.score}</strong></p> 
              <img src={show.image_url} alt="" />
            </div>
          ) 
        }) : null
      }
  </div>;
};

export default SearchList;

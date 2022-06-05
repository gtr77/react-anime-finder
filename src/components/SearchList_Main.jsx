import React, { useState, useEffect } from 'react';

const SearchList = ({ shows, searchValue }) => {

  // console.log("start_date", start_date)
  // console.log("synopsis", synopsis)
  // const [ shouldShow, setShouldShow ] = useState(false)

  console.log("SHOWS", shows);

  let position = 0;
  let totalShowsAmount = shows && shows.length;
  let showsPerPage = 10;
  let pagesAmount = totalShowsAmount / showsPerPage;
  let difference = totalShowsAmount % showsPerPage;
  let roundedPagesAmount = Math.floor(pagesAmount);
  let pageSelector = [];
  let pagesButtons = [];
  let shouldShow = false;

  const getShows = () => {
    for (let page = 1; page <= pagesAmount; page++) {
      pageSelector.push(shows.slice(position, position+showsPerPage));
      //setUpdateSelector([...pageSelector], shows.slice(position, position+showsPerPage))
      position = position+showsPerPage;
      pagesButtons.push(page);
    }
    if(difference !== 0) {
      pageSelector.push(shows.slice(position, totalShowsAmount));
      pagesButtons.push(roundedPagesAmount+1);
    } 
    return {
      pages: pagesButtons,
      showsPerPage: pageSelector
    };
  };
  getShows();

      // pageSelector[id].map((show) => {
    //   console.log(show.title);
    //   return (
    //     <div>
    //       <h1>Title: {show.title} </h1>
    //       <h2>Synopsis {show.synopsis}</h2> 
    //       <p><strong>{show.score}</strong></p> 
    //       <img src={show.image_url} alt="" />
    //     </div>
    //   );
    // });


    // let slicer = showsSelector.slice(0,10);
    // console.log("slicer", slicer);
    // slicer.length > 0 && slicer.map((show) => {
    //   console.log(show.title);
    //   return (
    //     <div>
    //       <h1>Title: {show.title} </h1>
    //       <h2>Synopsis {show.synopsis}</h2> 
    //       <p><strong>{show.score}</strong></p> 
    //       <img src={show.image_url} alt="" />
    //     </div>
    //   );  
    // });

  const getSelectedShows = (e, id) => {

    console.log("WORKS =====>", id);
    console.log("EVENTTTTT =====>", e);
    // setShouldShow(!shouldShow);
    shouldShow = !shouldShow;
    console.log("shouldShow =====>", shouldShow);


  }

  // const getSelectedShows = (id) => {
  //   console.log(showsSelector[id].score);
  //   return <div>SHITTTTT{showsSelector[id].score}</div>

  //   // return <div>{show.title}</div>;
  // }

  return <div>
    <h3>Total: {totalShowsAmount} </h3>
    {/* <h3> SHOW {shouldShow ? "YEAHHH" : "NO WAY" }</h3> */}
    <h3> SHOW {shouldShow ? "YEAHHH" : "NO WAY" }</h3>
    <h3>pageSelector:  </h3>
      {
        pagesButtons.length > 0 && pagesButtons.map((x, idx) => {
          return <button onClick={() => getSelectedShows(e, idx)}>Pag #{x}</button>
        })
      }  
    <div>
      
      {searchValue && pageSelector.length > 0 && pageSelector[0].map((show) => {
        console.log("pageSelector", show.title);
        return <div>
          <h1>Title: {show.title} </h1>
          <h2>Synopsis {show.synopsis}</h2> 
          <p><strong>{show.score}</strong></p> 
          <img src={show.image_url} alt="" />
        </div>;           
      })}
    </div>
  </div>;
};

export default SearchList;

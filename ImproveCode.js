(showsSelector && showsSelector[0] && showsSelector[0].title) ||
  'No Title Provided';

let array = ['A', 'b', 'c', 'd', 5, 5, 2, 3, 1, 6, 7, 8, 9, 10, 'dome', 23, 1];

let position = 0;
let showsPerPage = 3;
let showsAmount = array.length;
let pagesAmount = showsAmount / showsPerPage;
let difference = showsAmount % showsPerPage;
let roundedPagesAmount = Math.floor(pagesAmount);
let pageSelector = [];
let pagesButtons = [];
let getPages = () => {
  for (let page = 1; page <= pagesAmount; page++) {
    pageSelector.push(array.slice(position, position + showsPerPage));
    console.log('Selector Positions: ', pageSelector);
    position = position + showsPerPage;
    pagesButtons.push(page);
  }
  console.log('pagesButtonsBefore', pagesButtons);
  if (difference !== 0) {
    pageSelector.push(array.slice(position, showsAmount));
    console.log('Difference Selector Positions: ', pageSelector);
    pagesButtons.push(roundedPagesAmount + 1);
    console.log('pagesButtonsAFTER', pagesButtons);
  }
  console.log('===> Pages', pagesButtons);
  return {
    pages: pagesButtons,
    showsPerPage: pageSelector,
  };
};
getPages();

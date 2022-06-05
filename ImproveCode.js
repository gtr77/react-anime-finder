const reduxImportantNotes = [
  'STORE => CONFIGURE STORE AND IMPORT REDUCERS',
  'WRAPP THE APP OR THE NAME COMPONENT INTO THE PROVIDER TO SEND THE STORE AS A PROP',
  'REDUCERS => COMBINE REDUCERS ON INDEX.JSX AND CREATE REDUCER WITH INITIAL STATE AND SWITCH CASE FOR ACTION.TYPE',
  'ACTIONS => USUALLY DISPATCH TYPE AND PAYLOAD',
  'APP => BIND ACTION CREACTORS THEN CALL USESELECTOR AND USEDISPATCH TO CALL STORE AND DISPATCH ACTIONS',
];

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

function list(names) {
  //your code here
  let arraylength = names.length;
  let joinNames = '';
  let finalResult = '';
  let namesArray = names.map((x) => x.name);
  let getNames =
    arraylength > 0
      ? namesArray.reduce((acc, current, idx, vector) => {
          joinNames =
            idx < vector.length - 1
              ? `${acc}, ${current}`
              : `${acc} & ${current}`;
          return joinNames;
        })
      : '';
  return getNames;
}

list(['Bar', 'Homero', 'Lisa', 'Marge']);

function accum(s) {
  // your code
  let array = [];
  let newArray = [];
  const repeat = (str, count) => {
    for (let times = 0; times < count; times++) {
      array[times] = str;
    }
    newArray.push(array.join(''));
    return newArray;
  };

  s.split('').map((current, idx) => {
    repeat(current, idx + 1);
  });
  let result, combine;
  let capitalizeFilter = newArray.map((x) => {
    result = x.toLowerCase().charAt(0).toUpperCase();
    combine = result + x.toLowerCase().slice(1);
    return combine;
  });
  return capitalizeFilter.join('-');
}

accum('MjtkuBovqrU');

// MY APPROACH TOOK LONGER THAN EXPECTED
function minValue(values) {
  //your code here
  console.debug('MY APPROACH TOOK LONGER THAN EXPECTED > 3 HOURS');
  let filterDuplicates, position;
  for (let i = 0; i < values.length; i++) {
    values.filter((x, idx, vector) => {
      position = i + idx + 1;
      filterDuplicates =
        values[i] === vector[position] ? values.splice(position, 1) : values;
    });
  }
  return filterDuplicates.sort((a, b) => a - b);
}

minValue([5, 14, 5, 7, 5, 13, 7, 13, 21, 14]); // [5, 7, 13, 14, 21]

function minValue(values) {
  //your code here
  let filterDuplicates = values.filter((x, idx) => {
    return values.indexOf(x) === idx;
  });
  console.log(filterDuplicates);
  return filterDuplicates.sort((a, b) => a - b);
}

minValue([5, 14, 5, 7, 5, 13, 7, 13, 21, 14]); // [5, 7, 13, 14, 21]

const DEPOSIT_MONEY = 'deposit'
const WITHDROW_MONEY = 'withdrow'
const GET_SHOWS = 'GET_SHOWS'
const SEARCH_VALUE = 'SEARCH_VALUE'
const GET_TOTAL_SHOWS = 'GET_TOTAL_SHOWS'
const PAGES_AMOUNT = 'PAGES_AMOUNT'
const GET_SHOWS_SELECTOR = 'GET_SHOWS_SELECTOR'



const initialState = {
  account: 30
  // searchValue: "",
  // positionStart: 0,
  // totalShowsAmount: 0,
  // pagesAmount: 0,
  // showsSelector: [],
};

const reducer = ( state = initialState.account, action) => {
  switch (action.type) {
    case DEPOSIT_MONEY:
      return state + action.payload
    case WITHDROW_MONEY:
      return state - action.payload
    // case DEPOSIT_MONEY:
    //   return state + action.payload
    // case WITHDROW_MONEY:
    //   return state - action.payload
    default:
      return state;
  }
}

export default reducer;
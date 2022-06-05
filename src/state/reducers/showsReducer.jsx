import { 
  GET_SHOWS, 
  SET_LOADING
} from '../actions/types';



// useEffect(() => {
//   // const searchParams = 'dragonball';
//   getResults();
// }, [searchValue]);


const initialState = {
  loading: true,
  results: []
};

const reducer = ( state = initialState, action) => {
  switch (action.type) {
    case GET_SHOWS:
      return {
        ...state,
        results: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
import { ACTIONS } from "../actions";
const initialState = {
  isLoading: false,
  books: [],
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.ERROR_LOADING:
      console.error(action.payload);
      return {
        ...state,
        isLoading: false,
      };
    case ACTIONS.SET_BOOKS:
      return {
        ...state,
        isLoading: false,
        books: action.payload,
      };
    case ACTIONS.SET_QUOTES:
      return {
        ...state,
        books: state.books.map((character) =>
          character._id === action.payload._id
            ? {
                ...character,
                quotes: action.payload.quotes,
              }
            : character
        ),
      };
    default:
      return state;
  }
}

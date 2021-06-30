import {
  ADD_TO_BOOKMARK_LIST,
  GET_RECIPES,
  REMOVE_FROM_BOOKMARK_LIST,
} from './actions';

const initialState = {
  recipes: [],
  bookmarks: [],
};

function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case ADD_TO_BOOKMARK_LIST:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case REMOVE_FROM_BOOKMARK_LIST:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          recipe => recipe.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}

export default recipesReducer;

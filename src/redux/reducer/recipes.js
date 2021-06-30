const initRecipes = {
  recipes: [],
  bookmarks: [],
};

export const recipesReducer = (state = initRecipes, action) => {
  if (action.type === 'GET_RECIPES') {
    return {
      ...state,
      recipes: action.value,
    };
  }
  if (action.type === 'ADD_TO_BOOKMARK_LIST') {
    return {
      ...state,
      bookmarks: [...state.bookmarks, action.value],
    };
  }
  if (action.type === 'REMOVE_FROM_BOOKMARK_LIST') {
    return {
      ...state,
      bookmarks: state.bookmarks.filter(
        recipe => recipe.id !== action.value.id,
      ),
    };
  }
  return state;
};

import axios from 'axios';
import {BASE_URL} from '../config';

export const GET_RECIPES = 'GET_RECIPES';
export const ADD_TO_BOOKMARK_LIST = 'ADD_TO_BOOKMARK_LIST';
export const REMOVE_FROM_BOOKMARK_LIST = 'REMOVE_FROM_BOOKMARK_LIST';

export const getRecipes = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);
      if (res.data) {
        dispatch({
          type: GET_RECIPES,
          payload: res.data,
        });
      } else {
        console.log('Unable to Fetch Data from Server');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const addBookmark = recipe => dispatch => {
  dispatch({
    type: ADD_TO_BOOKMARK_LIST,
    payload: recipe,
  });
};

export const removeBookmark = recipe => dispatch => {
  dispatch({
    type: REMOVE_FROM_BOOKMARK_LIST,
    payload: recipe,
  });
};

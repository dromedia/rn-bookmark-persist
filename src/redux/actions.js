import axios from 'axios';
import {BASE_URL} from '../config';

export const GET_RECIPES = 'GET_RECIPES';
export const ADD_TO_BOOKMARK_LIST = 'ADD_TO_BOOKMARK_LIST';
export const REMOVE_FROM_BOOKMARK_LIST = 'REMOVE_FROM_BOOKMARK_LIST';

export const getRecipes = () => dispatch => {
  axios
    .get(`${BASE_URL}`)
    .then(res => {
      dispatch({
        type: GET_RECIPES,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
    });
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

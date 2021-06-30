import axios from 'axios';
import {BASE_URL} from '../../config';

export const getRecipes = () => dispatch => {
  axios
    .get(`${BASE_URL}`)
    .then(res => {
      dispatch({
        type: 'GET_RECIPES',
        value: res.data,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addBookmark = recipe => dispatch => {
  dispatch({
    type: 'ADD_TO_BOOKMARK_LIST',
    value: recipe,
  });
};

export const removeBookmark = recipe => dispatch => {
  dispatch({
    type: 'REMOVE_FROM_BOOKMARK_LIST',
    value: recipe,
  });
};

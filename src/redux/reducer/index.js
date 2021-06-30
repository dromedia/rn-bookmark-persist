import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {recipesReducer} from './recipes';

const reducer = combineReducers({
  globalReducer,
  recipesReducer,
});

export default reducer;

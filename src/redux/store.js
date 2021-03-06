import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {globalReducer} from './reducer/global';
import {recipesReducer} from './reducer/recipes';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookmarks'],
};

const rootReducer = combineReducers({
  globalReducer,
  recipesReducer: persistReducer(persistConfig, recipesReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

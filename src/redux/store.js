import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookmarks'],
};

// const rootReducer = combineReducers({
//   recipesReducer: persistReducer(persistConfig, recipesReducer),
// });

// const rootReducer = combineReducers({
//   // recipesReducer,
//   resepReducer,
// });

const rootReducer = reducer;

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(rootReducer, applyMiddleware(thunk));
// export const persistor = persistStore(store);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

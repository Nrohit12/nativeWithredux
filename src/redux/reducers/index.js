import { combineReducers, createStore } from 'redux';

import authenticationReducer from './authentication';
import userDetailsReducer from './userDetails';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'

export const allReducer = combineReducers({
	authentication: authenticationReducer,
	userDetails: userDetailsReducer,
});
const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, allReducer);
export const store = createStore(
	persistedReducer
);
export const persistor = persistStore(store);

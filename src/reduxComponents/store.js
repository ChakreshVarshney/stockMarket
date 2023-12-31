import { createStore, combineReducers } from 'redux';
import stockDataReducer from './stockDataReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
    stockData: stockDataReducer,
    favorites: favoritesReducer,
});

const store = createStore(rootReducer);

export default store;

import { combineReducers } from 'redux';
import favoriteBeersReducer from './favoriteBeers';
import favoriteBreweriesReducer from './favoriteBreweries';
import wishlistBreweriesReducer from './wishlistBreweries';
import wishlistBeersReducer from './wishlistBeers';

const rootReducer = combineReducers({
  favoriteBeers: favoriteBeersReducer,
  favoriteBreweries: favoriteBreweriesReducer,
  wishlistBeers: wishlistBeersReducer,
  wishlistBreweries: wishlistBreweriesReducer
})

export default rootReducer;
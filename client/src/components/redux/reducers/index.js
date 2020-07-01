import { combineReducers } from 'redux';
import favoriteBeersReducer from './favoriteBeers';
import favoriteBreweriesReducer from './favoriteBreweries';


const rootReducer = combineReducers({
  favoriteBeers: favoriteBeersReducer,
  favoriteBreweries: favoriteBreweriesReducer
})

export default rootReducer;
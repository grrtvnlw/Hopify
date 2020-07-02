import { combineReducers } from 'redux';
import favoriteBeersReducer from './favoriteBeers';
import favoriteBreweriesReducer from './favoriteBreweries';
import wishlistBreweriesReducer from './wishlistBreweries';
import wishlistBeersReducer from './wishlistBeers';
import cityReducer from './city';
import styleReducer from './style';
import beersReducer from './beers'
import breweriesReducer from './breweries';
import mapCityReducer from './mapCity'

const rootReducer = combineReducers({
  favoriteBeers: favoriteBeersReducer,
  favoriteBreweries: favoriteBreweriesReducer,
  wishlistBeers: wishlistBeersReducer,
  wishlistBreweries: wishlistBreweriesReducer,
  cityName: cityReducer,
  styleName: styleReducer,
  beers: beersReducer,
  breweries: breweriesReducer,
  mapCity: mapCityReducer
})

export default rootReducer;
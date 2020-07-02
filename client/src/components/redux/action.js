export const ADD_FAVORITE_BEER = 'ADD_FAVORITE_BEER';
export const DELETE_FAVORITE_BEER = 'DELETE_FAVORITE_BEER';
export const ADD_FAVORITE_BREWERY = 'ADD_FAVORITE_BREWERY';
export const DELETE_FAVORITE_BREWERY = 'DELETE_FAVORITE_BREWERY';
export const ADD_WISHLIST_BEER = 'ADD_WISHLIST_BEER';
export const DELETE_WISHLIST_BEER = 'DELETE_WISHLIST_BEER';
export const ADD_WISHLIST_BREWERY = 'ADD_WISHLIST_BREWERY';
export const DELETE_WISHLIST_BREWERY = 'DELETE_WISHLIST_BREWERY';
export const ADD_STYLE = 'ADD_STYLE';
export const ADD_CITY = 'ADD_CITY';
export const ADD_BEERS = 'ADD_BEERS';
export const ADD_BREWERIES = 'ADD_BREWERIES';
export const ADD_MAPCITY = 'ADD_MAPCITY';

export function addFavoriteBeer(value) {
  return {
    type: ADD_FAVORITE_BEER,
    value
  }
}

export function deleteFavoriteBeer(value) {
  return {
    type: DELETE_FAVORITE_BEER,
    value
  }
}

export function addFavoriteBrewery(value) {
  return {
    type: ADD_FAVORITE_BREWERY,
    value
  }
}

export function deleteFavoriteBrewery(value) {
  return {
    type: DELETE_FAVORITE_BREWERY,
    value
  }
}

export function addWishlistBeer(value) {
  return {
    type: ADD_WISHLIST_BEER,
    value
  }
}

export function deleteWishlistBeer(value) {
  return {
    type: DELETE_WISHLIST_BEER,
    value
  }
}

export function addWishlistBrewery(value) {
  return {
    type: ADD_WISHLIST_BREWERY,
    value
  }
}

export function deleteWishlistBrewery(value) {
  return {
    type: DELETE_WISHLIST_BREWERY,
    value
  }
}

export function addStyle(value) {
  return {
    type: ADD_STYLE,
    value
  }
}

export function addCity(value) {
  return {
    type: ADD_CITY,
    value
  }
}

export function addBeers(value) {
  return {
    type: ADD_BEERS,
    value
  }
}

export function addBreweries(value) {
  return {
    type: ADD_BREWERIES,
    value
  }
}

export function addMapCity(value) {
  return {
    type: ADD_MAPCITY,
    value
  }
}
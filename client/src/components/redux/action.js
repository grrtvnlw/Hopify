export const ADD_FAVORITE_BEER = 'ADD_FAVORITE_BEER';
export const DELETE_FAVORITE_BEER = 'DELETE_FAVORITE_BEER';
export const ADD_FAVORITE_BREWERY = 'ADD_FAVORITE_BREWERY';
export const DELETE_FAVORITE_BREWERY = 'DELETE_FAVORITE_BREWERY';

export function addFavoriteBeer(value, category) {
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

export function addFavoriteBrewery(value, category) {
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
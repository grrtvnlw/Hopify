export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

export function addFavorite(value) {
  return {
    type: ADD_FAVORITE,
    value
  }
}

export function deleteFavorite(value) {
  return {
    type: DELETE_FAVORITE,
    value
  }
}
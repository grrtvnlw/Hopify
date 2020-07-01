import { ADD_FAVORITE, DELETE_FAVORITE, ADD_WISHLIST, DELETE_WISHLIST } from './action'

const initialState = {
  favorites: []
}

function reducer(state = initialState, action) {
  console.log(state)
  switch(action.type) {
    case ADD_FAVORITE:
      return {
        favorites: [...state.favorites, action.value]
      }
      break;
    case DELETE_FAVORITE:
      let results = state.favorites.filter(favorite => favorite.name !== action.value.name)
      return {
        favorites: results
      }
      break;
    default:
      return state;
  }
}

export default reducer;
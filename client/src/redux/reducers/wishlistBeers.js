import { ADD_WISHLIST_BEER, DELETE_WISHLIST_BEER } from '../action'

const initialState = []

function wishlistBeersReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_WISHLIST_BEER:
      return [...state, action.value];
    case DELETE_WISHLIST_BEER:
      let beerResults = state.filter(favorite => favorite.name !== action.value.name)
      return beerResults;
    default:
      return state;
  }
}

export default wishlistBeersReducer;
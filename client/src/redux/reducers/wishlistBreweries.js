import { ADD_WISHLIST_BREWERY, DELETE_WISHLIST_BREWERY } from '../action'

const initialState = []

function wishlistBreweriesReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_WISHLIST_BREWERY:
      return [...state, action.value];
    case DELETE_WISHLIST_BREWERY:
      let breweryResults = state.filter(favorite => favorite.name !== action.value.name)
      return breweryResults;
    default:
      return state;
  }
}

export default wishlistBreweriesReducer;
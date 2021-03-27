import { ADD_FAVORITE_BEER, DELETE_FAVORITE_BEER } from '../action'

const initialState = []

function favoriteBeersReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_FAVORITE_BEER:
      return [...state, action.value];
    case DELETE_FAVORITE_BEER:
      let beerResults = state.filter(favorite => favorite.name !== action.value.name)
      return beerResults;
    default:
      return state;
  }
}

export default favoriteBeersReducer;
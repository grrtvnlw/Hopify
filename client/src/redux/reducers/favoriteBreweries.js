import { ADD_FAVORITE_BREWERY, DELETE_FAVORITE_BREWERY } from '../action'

const initialState = []

function favoriteBreweriesReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_FAVORITE_BREWERY:
      return [...state, action.value];
    case DELETE_FAVORITE_BREWERY:
      let breweryResults = state.filter(favorite => favorite.name !== action.value.name)
      return breweryResults;
    default:
      return state;
  }
}

export default favoriteBreweriesReducer;
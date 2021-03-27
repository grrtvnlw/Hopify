import { ADD_BREWERIES } from '../action'

const initialState = []

function breweriesReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_BREWERIES:
      return action.value
    default:
      return state;
  }
}

export default breweriesReducer;
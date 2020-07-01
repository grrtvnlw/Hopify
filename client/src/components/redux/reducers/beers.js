import { ADD_BEERS } from '../action'

const initialState = []

function beersReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_BEERS:
      return action.value
    default:
      return state;
  }
}

export default beersReducer;
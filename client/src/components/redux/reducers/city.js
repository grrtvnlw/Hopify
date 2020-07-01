import { ADD_CITY } from '../action'

const initialState = ''

function cityReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CITY:
      return action.value;
    default:
      return state;
  }
}

export default cityReducer;
import { ADD_CITY, DELETE_CITY } from '../action'

const initialState = []

function cityReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CITY:
      return [...state, action.value];
    case DELETE_CITY:
      let results = state.filter(city => city.name !== action.value.name)
      return results;
    default:
      return state;
  }
}

export default cityReducer;
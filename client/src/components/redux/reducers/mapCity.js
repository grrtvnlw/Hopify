import { ADD_MAPCITY } from '../action'

const initialState = ''

function mapCityReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_MAPCITY:
      return action.value;
    default:
      return state;
  }
}

export default mapCityReducer;
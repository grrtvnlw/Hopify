import { ADD_STYLE } from '../action'

const initialState = ''

function styleReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_STYLE:
      return action.value;
    default:
      return state;
  }
}

export default styleReducer;
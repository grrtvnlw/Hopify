import { ADD_STYLE, DELETE_STYLE } from '../action'

const initialState = []

function styleReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_STYLE:
      return [...state, action.value];
    case DELETE_STYLE:
      let results = state.filter(style => style.name !== action.value.name)
      return results;
    default:
      return state;
  }
}

export default styleReducer;
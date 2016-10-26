
const initialState = []

const filters = (state=initialState,action) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return [...state,action.filters]
    case 'REMOVE_FILTER':
      let index = state.findIndex((x) => x === action.filters);
      return [
        ...state.slice(0,index),
        ...state.slice(index+1)
      ]
    default:
      return state
  }
}

export default filters


const initialState = []
const design = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_DESIGN_LIST_SUCCESS':
      return action.payload
      case 'LOGOUT':
        return initialState
    default:
      return state;
  }
}
export default design;

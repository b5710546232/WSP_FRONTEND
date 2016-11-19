const initialState = []
const bottle = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_BOTTLE_LIST_SUCCESS':
      return action.payload
      case 'LOGOUT':
        return initialState
    default:
      return state;
  }
}
export default bottle;

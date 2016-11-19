const initialState = []
const logo = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_LOGO_LIST_SUCCESS':
      return action.payload
      case 'LOGOUT':
        return initialState
    default:
      return state;
  }
}
export default logo;

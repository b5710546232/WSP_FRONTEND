const initialState = []
const banner = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_BANNER_LIST_SUCCESS':
      return action.payload
      case 'LOGOUT':
        return initialState
    default:
      return state;
  }
}
export default banner;

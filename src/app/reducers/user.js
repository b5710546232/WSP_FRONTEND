import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
// const authed = (state=initialState,action)=>{
//   switch (action.type) {
//     case 'RECEIVE_ACCESS_TOKEN':
//     return Object.assign({}, state, {
//       accessToken: action.accessToken,
//     })
//
//     case 'RECEIVE_AUTHED_USER':
//     return Object.assign({}, state, {
//       user: action.user,
//     })
//     default : return state
//   }
//
// }
// export default authed

const initialState = {
  username: "",
  isLogin:localStorage.token!=null ? true:false,
  isRegister:false,
  accessToken:localStorage.token !==null?localStorage.token :null,
  userdata:null,
}

const user = (state=initialState,action)=>{
  switch(action.type) {
    case Action.RECEIVE_ACCESS_TOKEN_SUCCESS:
    console.log('action',action.payload);
    localStorage.setItem('token',action.payload.token)
    return Object.assign({}, state, {
         accessToken : action.payload.token
       })
    case Action.LOAD_USER_DATA_SUCCESS:
    return Object.assign({}, state, {
        isLogin: true,
        username:action.payload.username,
        userdata:action.payload
      })
      case Action.EDIT_USER_SUCCESS:
      return Object.assign({}, state, {
          username:action.payload.username,
          userdata:action.payload
        })
    case 'REGISTER_SUCCESS':
      return Object.assign({}, state, {
        isRegister: true
      })
    case Action.LOGOUT:
      localStorage.removeItem('token')
      return Object.assign({}, state, {
          isLogin: false,
        })
    default:
      return state;
  }
}
export default user;

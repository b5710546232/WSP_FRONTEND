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
  change_password_success:false,
  is_admin:false
}

const logoutState = {
  username: "",
  isLogin:false,
  isRegister:false,
  accessToken:null,
  userdata:null,
  change_password_success:false,
  is_admin:false
}

const user = (state=initialState,action)=>{
  switch(action.type) {
    case Action.RECEIVE_ACCESS_TOKEN_SUCCESS:
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
      case 'LOAD_USER_DATA_FAILURE':
      return logoutState

      case 'EDIT_USER_SUCCESS':
      // console.log('edit',action.payload);
      return Object.assign({}, state, {
          username:action.payload.username,
          userdata:action.payload
        })
    case 'REGISTER_SUCCESS':
      return Object.assign({}, state, {
        isRegister: true
      })
    case 'CHANGE_PASSWORD_SUCCESS':
    return Object.assign({}, state, {
      change_password_success: true
    })
    case 'CHANGE_PASSWORD_FAILURE':
    return Object.assign({}, state, {
      change_password_success: false
    })
    case 'LOGOUT':
      // console.log('debug','reducer logout')
      localStorage.removeItem('token')
      return logoutState
    case 'CHECK_ADMIN_SUCCESS':
      return Object.assign({}, state, {
          is_admin: true,
        })
    case 'CHECK_AMDIN_FAILURE':
      return Object.assign({}, state, {
          is_admin: false,
        })
    case 'EDIT_PASSWORD':
      return Object.assign({}, state, {
        change_password_success: false
      })
    default:
      return state;
  }
}
export default user;

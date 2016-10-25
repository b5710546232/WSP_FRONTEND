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
  isLogin: false,
  accessToken:null,
  userdata:null,
}

const user = (state=initialState,action)=>{
  switch(action.type) {
    case Action.RECEIVE_ACCESS_TOKEN_SUCCESS:
    console.log('action',action.payload);
    return Object.assign({}, state, {
         accessToken : action.payload.token
       })
   case Action.LOAD_USER_DATA_SUCCESS:
   return Object.assign({}, state, {
        isLogin: true,
        username:action.payload.username,
        userdata:action.payload
      })
  //  console.log(action.data);
  //  return Object.assign({}, state, {
  //       isLogin: true,
  //       username:action.data.name
  //     })
      // newState.isLogin = true,
      // newState.username = action.data
      // return newState;
    case Action.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
export default user;

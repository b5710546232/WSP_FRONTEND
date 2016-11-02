import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = {
  onChangingPassword: false,
}
const validator = (state=initialState,action)=>{
  switch(action.type) {
    case 'CHANGE_PASSWORD_FAILURE':
      return Object.assign({}, state, {
           onChangingPassword : true
         })
    case 'CHANGE_PASSWORD_SUCCESS':
      return Object.assign({}, state, {
           onChangingPassword : true
         })
    case 'RESET_VALIDATOR':
      return Object.assign({}, state, {
           onChangingPassword : false
         })
    default:
      return state;
  }
}
export default validator

import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = {
  onChangingPassword: false,
  onCreateAddress:false,
  onEditAddress : false,
  is_create_address_success : false,
  is_edit_address_success : false,
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
    case 'CREATE_ADDRESS_SUCCESS':
      return Object.assign({}, state, {
          onCreateAddress : true,
          is_create_address_success :true
        })
    case 'CREATE_ADDRESS_FAILURE':
      return Object.assign({}, state, {
          onCreateAddress : true,
          is_create_address_success:false
        })
    case 'UPDATE_ADDRESS_SUCCESS':
      return Object.assign({}, state, {
          onEditAddress : true,
          is_edit_address_success:true
        })
    case 'UPDATE_ADDRESS_FAILURE':
      return Object.assign({}, state, {
          onEditAddress : true,
          is_edit_address_success:false
        })
    case 'RESET_VALIDATOR':
      return initialState
    default:
      return state;
  }
}
export default validator

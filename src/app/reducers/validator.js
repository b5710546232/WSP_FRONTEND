import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = {
  onChangingPassword: false,
  onCreateAddress:false,
  onEditAddress : false,
  is_create_address_success : false,
  is_edit_address_success : false,
  onEditUser:false,
  is_edit_user_success : false,
  onUploadSlip : false,
  is_upload_success : false,
  onDeleteSlip : false,
  is_delete_slip_success :false,
  onPay : false,
  is_pay_success : false,
  onDeleteItemInCart: false,
  is_delete_item_success : false,
  onLogin : false,
  is_login_success:false,
  onRegister :false,
  is_register_success:false,
  onDeactiveUser : false,
  is_deactive_user_success:false,
  onReactiveUser : false,
  is_reactive_user_success : false,
  onAssignStaff : false,
  is_assign_staff_success : false,
  onFireStaff : false,
  is_fire_staff_success : false,
  onDeactiveCategory : false,
  is_deactive_category_success : false,
  onReactiveCategory : false,
  is_reactive_category_success : false,
  onEditCategory : false,
  is_edit_category_success :false,
  onDeactiveProduct : false,
  is_deactive_product_success : false,
  onReactiveProduct : false,
  is_reactive_product_success : false,
  onEditProduct : false,
  is_edit_product_success : false,
  onEditMethod : false,
  is_edit_method_sucess : false,
  onReactiveMethod  : false,
  is_reactive_method_success: false,
  onDeactiveMethod  : false,
  is_deactive_method_success: false,
  onCreateMethod : false,
  is_create_method_success : false,
  onUpdateMethod : false,
  is_update_method_success : false
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
    case 'EDIT_USER_SUCCESS':
    return Object.assign({}, state, {
      onEditUser : true,
      is_edit_user_success:true
    })
    case 'EDIT_USER_FAILURE':
    return Object.assign({}, state, {
      onEditUser : true,
      is_edit_user_success:false
    })
    case 'DELETE_TRANSFER_SLIP_SUCCESS':
    return Object.assign({}, state, {
      onDeleteSlip : true,
      is_delete_slip_success:true
    })
    case 'DELETE_TRANSFER_SLIP_FAILURE':
    return Object.assign({}, state, {
      onDeleteSlip : true,
      is_delete_slip_success:false
    })
    case 'UPLOAD_TRANSFER_SLIP_SUCCESS':
    return Object.assign({}, state, {
      onUploadSlip : true,
      is_upload_success:true
    })
    case 'UPLOAD_TRANSFER_SLIP_FAILURE':
    return Object.assign({}, state, {
      onUploadSlip : true,
      is_upload_success:false
    })
    case 'PAY_CART_SUCCESS':
    return Object.assign({}, state, {
      onPay : true,
      is_pay_success:true
    })
    case 'PAY_CART_FAILURE':
    return Object.assign({}, state, {
      onPay : true,
      is_pay_success:false
    })
    case 'DELETE_CART_SUCCESS':
    return Object.assign({}, state, {
      onDeleteItemInCart : true,
      is_delete_item_success:true
    })
    case 'DELETE_CART_FAILURE':
    return Object.assign({}, state, {
      onDeleteItemInCart : true,
      is_delete_item_success:false
    })
    case 'REGISTER_SUCCESS':
    return Object.assign({}, state, {
      onRegister : true,
      is_register_success:true
    })
    case 'REGISTER_FAILURE':
    return Object.assign({}, state, {
      onRegister : true,
      is_register_success:false
    })
    case 'RECEIVE_ACCESS_TOKEN_SUCCESS':
    return Object.assign({}, state, {
      onLogin : true,
      is_login_success : true
    })
    case 'RECEIVE_ACCESS_TOKEN_FAILURE':
    return Object.assign({}, state, {
      onLogin : true,
      is_login_success:false
    })
    case 'DEACTIVE_USER_ADMIN_SUCCESS':
    return Object.assign({}, state, {
      onDeactiveUser : true,
      is_deactive_user_success:true
    })
    case 'DEACTIVE_USER_ADMIN_FAILURE':
    return Object.assign({}, state, {
      onDeactiveUser : true,
      is_deactive_user_success:false
    })
    case 'REACTIVE_USER_ADMIN_SUCCESS':
    return Object.assign({}, state, {
      onReactiveUser : true,
      is_reactive_user_success : true
    })
    case 'REACTIVE_USER_ADMIN_FAILURE':
    return Object.assign({}, state, {
      onReactiveUser : true,
      is_reactive_user_success:false
    })
    case 'ASSIGN_STAFF_ADMIN_SUCCESS':
    return Object.assign({}, state, {
      onAssignStaff : true,
      is_assign_staff_success:true
    })
    case 'ASSIGN_STAFF_ADMIN_FAILURE':
    return Object.assign({}, state, {
      onAssignStaff : true,
      is_assign_staff_success:false
    })
    case 'FIRE_STAFF_ADMIN_SUCCESS':
    return Object.assign({}, state, {
      onFireStaff : true,
      is_fire_staff_success : true
    })
    case 'FIRE_STAFF_ADMIN_FAILURE':
    return Object.assign({}, state, {
      onFireStaff : true,
      is_fire_staff_success:false
    })
    case 'DEACTIVE_METHOD_ADMIN_SUCCESS':
    return Object.assign({}, state, {
      onDeactiveMethod : true,
      is_deactive_method_success : true
    })
    case 'DEACTIVE_METHOD_ADMIN_FAILURE':
    return Object.assign({}, state, {
      onDeactiveMethod : true,
      is_deactive_method_success:false
    })
    case 'REACTIVE_METHOD_ADMIN_SUCCESS':
    return Object.assign({}, state, {
      onReactiveMethod : true,
      is_reactive_method_success : true
    })
    case 'REACTIVE_METHOD_ADMIN_FAILURE':
    return Object.assign({}, state, {
      onReactiveMethod : true,
      is_reactive_method_success:false
    })
    case 'CREATE_METHOD_ADMIN_SUCCESS':
    return Object.assign({}, state, {
      onCreateMethod : true,
      is_create_method_success : true
    })
    case 'CREATE_METHOD_ADMIN_FAILURE':
    return Object.assign({}, state, {
      onCreateMethod : true,
      is_create_method_success:false
    })
    case 'UPDATE_METHOD_ADMIN_SUCCESS':
    return Object.assign({}, state, {
      onUpdateMethod : true,
      is_update_method_success : true
    })
    case 'UPDATE_METHOD_ADMIN_FAILURE':
    return Object.assign({}, state, {
      onUpdateMethod : true,
      is_update_method_success:false
    })
    case 'DEACTIVE_CATEGORY_ADMIN_SUCCESS':
    return Object.assign({}, state, {
      onDeactiveCategory : true,
      is_deactive_category_success : true
    })
    case 'DEACTIVE_CATEGORY_ADMIN_FAILURE':
    return Object.assign({}, state, {
      onDeactiveCategory : true,
      is_deactive_category_success:false
    })
    case 'RESET_VALIDATOR':
    return initialState
    default:
    return state;
  }
}
export default validator

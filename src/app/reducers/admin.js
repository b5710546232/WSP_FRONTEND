import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = {
  user : [],
  address : [],
  product : [],
  category : [],
  order : [],
  item_line : [],
  method : []
}

const admin = (state=initialState,action)=>{
  console.log('action',action.payload);
  switch(action.type) {
    case 'LOAD_ADMIN_USER_SUCCESS':
      return Object.assign({}, state, {
        user: action.payload
      })
    case 'LOAD_ADMIN_ADDRESS_SUCCESS':
      return Object.assign({}, state, {
        address: action.payload
      })
    case 'LOAD_ADMIN_PRODUCT_SUCCESS':
      return Object.assign({}, state, {
        product: action.payload
      })
    case 'LOAD_ADMIN_CATEGORY_SUCCESS':
      return Object.assign({}, state, {
        category: action.payload
      })
    case 'LOAD_ADMIN_ORDER_SUCCESS':
      return Object.assign({}, state, {
        order: action.payload
      })
    case 'LOAD_ADMIN_ITEMLINE_SUCCESS':
      return Object.assign({}, state, {
        item_line: action.payload
      })
    case 'LOAD_ADMIN_METHOD_SUCCESS':
      return Object.assign({}, state, {
        method: action.payload
    })
    default :
      return state;
  }
}
export default admin;

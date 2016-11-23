import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = {
  user : [],
  address : [],
  product : [],
  category : [],
  order : [],
  item_line : [],
  method : [],
  bottle : [],
  design : [],
  logo : [],
  banner : []
}

let newproduct = []
const admin = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_ADMIN_USER_SUCCESS':
      return Object.assign({}, state, {
        user: action.payload.sort((a, b) => (a.id - b.id))
      })
    case 'LOAD_ADMIN_ADDRESS_SUCCESS':
      return Object.assign({}, state, {
        address: action.payload.sort((a, b) => (a.id - b.id))
      })
    case 'LOAD_ADMIN_PRODUCT_SUCCESS':
      return Object.assign({}, state, {
        product: action.payload.sort((a, b) => (a.id - b.id))
      })
    case 'LOAD_ADMIN_CATEGORY_SUCCESS':
      return Object.assign({}, state, {
        category: action.payload.sort((a, b) => (a.id - b.id))
      })
    case 'LOAD_ADMIN_ORDER_SUCCESS':
      return Object.assign({}, state, {
        order: action.payload.sort((a, b) => (a.id - b.id))
      })
    case 'LOAD_ADMIN_ITEMLINE_SUCCESS':
      return Object.assign({}, state, {
        item_line:action.payload.sort((a, b) => (a.id - b.id))
      })
    case 'LOAD_ADMIN_METHOD_SUCCESS':
      return Object.assign({}, state, {
        method: action.payload.sort((a, b) => (a.id - b.id))
    })
    case 'LOAD_ADMIN_LOGO_SUCCESS':
      return Object.assign({}, state, {
        logo: action.payload.sort((a, b) => (a.id - b.id))
    })
    case 'LOAD_ADMIN_BANNER_SUCCESS':
      return Object.assign({}, state, {
        banner: action.payload.sort((a, b) => (a.id - b.id))
    })
    case 'LOAD_ADMIN_DESIGN_SUCCESS':
      return Object.assign({}, state, {
        design: action.payload.sort((a, b) => (a.id - b.id))
    })
    case 'LOAD_ADMIN_BOTTLE_SUCCESS':
      return Object.assign({}, state, {
        bottle: action.payload.sort((a, b) => (a.id - b.id))
    })
    case 'LOGOUT':
      return initialState
    default :
      return state;
  }
}
export default admin;

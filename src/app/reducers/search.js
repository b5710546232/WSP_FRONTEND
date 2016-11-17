import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = {
  search_product:[]
}

const search = (state=initialState,action)=>{
  switch(action.type) {
    case 'CREATE_SEARCH_PRODUCT':
      return Object.assign( {}, state, {
        search_product:action.products
      })
    case 'SEARCH_PRODUCT':
      return Object.assign( {}, state, {
        search_product:action.products.filter(
          product => product.name.includes(action.text)
        )
      })
    default:
      return state;
  }
}
export default search;

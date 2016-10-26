import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = []

const products = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_PRODUCT_LIST_SUCCESS':
      console.log(action.payload,"product_list");
      return action.payload
    case 'LOAD_PRODUCT_SUCCESS':
      return [action.payload]
    default:
      return state;
  }
}
export default products;

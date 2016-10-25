import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = []

const cartReducer = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_CART_LIST_SUCCESS':
      return action.payload
    default:
      return state;
  }
}
export default cartReducer;

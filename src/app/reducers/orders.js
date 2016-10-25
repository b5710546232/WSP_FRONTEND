import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = []

const orders = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_ORDER_LIST_SUCCESS':
      return action.payload
    default:
      return state;
  }
}
export default orders;

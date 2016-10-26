import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = []

const paymentMethods = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_PAYMENTMETHOD_LIST_SUCCESS':
      return action.payload
    default:
      return state;
  }
}
export default paymentMethods;

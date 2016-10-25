import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = []

const address = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_ADDRESS_LIST_SUCCESS':
      return action.payload
    default:
      return state;
  }
}
export default address;

import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = []

const address = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_ADDRESS_LIST_SUCCESS':
    return action.payload
    case 'CREATE_ADDRESS_SUCCESS':
    return [
            ...state,
            action.payload
        ]
    case 'LOGOUT':
      return initialState
    default:
      return state;
  }
}
export default address;

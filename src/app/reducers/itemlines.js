import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'

const initialState = []

const itemlines = (state=initialState,action)=>{
  switch(action.type) {
    case 'LOAD_ITEMLINE_SUCCESS':
      return action.payload
    default :
      return state
  }
}
export default itemlines;

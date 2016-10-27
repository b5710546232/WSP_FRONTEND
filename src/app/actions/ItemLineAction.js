import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {ITEMLINE_ENDPOINT} from '../constants/endpoints'

export const loadItemLines = (token) => (
  {[CALL_API]: {
    endpoint: ITEMLINE_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_ITEMLINE_REQUEST', 'LOAD_ITEMLINE_SUCCESS', 'LOAD_ITEMLINE_FAILURE']
  }}
)

import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {BOTTLE_ENDPOINT} from '../constants/endpoints'

// List bottle
export const loadBottleList = (token) => (
  {[CALL_API]: {
    endpoint: BOTTLE_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_BOTTLE_LIST_REQUEST', 'LOAD_BOTTLE_LIST_SUCCESS', 'LOAD_BOTTLE_LIST_FAILURE']
  }}
)

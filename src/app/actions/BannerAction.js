import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {BANNER_ENDPOINT} from '../constants/endpoints'

// List bottle
export const loadBottleList = (token) => (
  {[CALL_API]: {
    endpoint: BANNER_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_BANNER_LIST_REQUEST', 'LOAD_BANNER_LIST_SUCCESS', 'LOAD_BANNER_LIST_FAILURE']
  }}
)

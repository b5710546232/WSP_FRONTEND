import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {LOGO_ENDPOINT} from '../constants/endpoints'

// List logo
export const loadLogoList = (token) => (
  {[CALL_API]: {
    endpoint: LOGO_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_LOGO_LIST_REQUEST', 'LOAD_LOGO_LIST_SUCCESS', 'LOAD_LOGO_LIST_FAILURE']
  }}
)

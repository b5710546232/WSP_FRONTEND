import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {PROPERTY_ENDPOINT} from '../constants/endpoints'

// Add new Product [Staff]
export const AddOption = (data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: PROPERTY_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'CREATE_PROPERTY_REQUEST',
          {
            type: 'CREATE_PROPERTY_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'CREATE_PROPERTY_FAILURE'
        ]
      }
    }
  )
)


// Get product
export const loadProduct = (id) => (
  {[CALL_API]: {
    endpoint: PROPERTY_ENDPOINT+id+'/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_PROPERTY_REQUEST', 'LOAD_PROPERTY_SUCCESS', 'LOAD_PROPERTY_FAILURE']
  }}
)

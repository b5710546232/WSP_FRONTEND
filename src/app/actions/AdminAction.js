import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {
  ADMIN_USER_ENDPOINT,
  ADMIN_ADDRESS_ENDPOINT,
  ADMIN_ORDER_ENDPOINT,
  ADMIN_CATEGORY_ENDPOINT,
  ADMIN_PRODUCT_ENDPOINT,
  ADMIN_ITEMLINE_ENDPOINT
} from '../constants/endpoints'

export const loadUser = (id,token) => (
  {[CALL_API]: {
    endpoint: ADMIN_USER_ENDPOINT+id+'/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_ADMIN_USER_REQUEST', 'LOAD_ADMIN_USER_SUCCESS', 'LOAD_ADMIN_USER_FAILURE']
  }}
)

export const createUser = (data) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_USER_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'CREATE_USER_ADMIN_REQUEST',
          {
            type: 'CREATE_USER_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'CREATE_USER_ADMIN_FAILURE'
        ]
      }
    }
  )
)

export const updateUser = (data) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_USER_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'UPDATE_USER_ADMIN_REQUEST',
          {
            type: 'UPDATE_USER_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'UPDATE_USER_ADMIN_FAILURE'
        ]
      }
    }
  )
)

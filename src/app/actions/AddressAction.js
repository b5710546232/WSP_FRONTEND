import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {ADDRESS_ENDPOINT} from '../constants/endpoints'

// Create Address
export const createAddress = (data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADDRESS_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'CREATE_ADDRESS_REQUEST',
          {
            type: 'CREATE_ADDRESS_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'CREATE_ADDRESS_FAILURE'
        ]
      }
    }
  )
)
// Get list of address
export const loadAddressList = (token) => (
  {[CALL_API]: {
    endpoint: ADDRESS_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_ADDRESS_LIST_REQUEST', 'LOAD_ADDRESS_LIST_SUCCESS', 'LOAD_ADDRESS_LIST_FAILURE']
  }}
)

// Get Address
export const loadAddress = (id,token) => (
  {[CALL_API]: {
    endpoint: ADDRESS_ENDPOINT+id+'/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_ADDRESS_REQUEST', 'LOAD_ADDRESS_SUCCESS', 'LOAD_ADDRESS_FAILURE']
  }}
)

// Edit address [Owner(limit),Staff]
export const editAddress = (data,id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADDRESS_ENDPOINT+id+'/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'UPDATE_ADDRESS_REQUEST',
          {
            type: 'UPDATE_ADDRESS_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadAddressList(token))
                return data
              })
            }
          },
          'UPDATE_ADDRESS_FAILURE'
        ]
      }
    }
  )
)
// Deactive address
export const deletePaymentMethod = (id,token)=> (
  {[CALL_API]: {
    endpoint: ADDRESS_ENDPOINT+id+'/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'DELETE',
    types: ['DELETE_ADDRESS_REQUEST', 'DELETE_ADDRESS_SUCCESS', 'DELETE_ADDRESS_FAILURE']
  }}
)

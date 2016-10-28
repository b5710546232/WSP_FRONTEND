import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {ORDER_ENDPOINT} from '../constants/endpoints'

// Get list of order
export const loadOrderList = (token) => (
  {[CALL_API]: {
    endpoint: ORDER_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_ORDER_LIST_REQUEST', 'LOAD_ORDER_LIST_SUCCESS', 'LOAD_ORDER_LIST_FAILURE']
  }}
)
// Get order
export const loadOrder = (token,id) => (
  {[CALL_API]: {
    endpoint: ORDER_ENDPOINT+id+'/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_ORDER_REQUEST', 'LOAD_ORDER_SUCCESS', 'LOAD_ORDER_FAILURE']
  }}
)
// Update Postal Track

export const updatePostalTrack= (data,id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ORDER_ENDPOINT+id+'/update_track/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'UPDATE_ORDER_REQUEST',
          {
            type: 'UPDATE_ORDER_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'UPDATE_ORDER_FAILURE'
        ]
      }
    }
  )
)
export const uploadTransferSlip= (data,id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ORDER_ENDPOINT+id+'/upload_slip/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'UPLOAD_TRANSFER_SLIP_REQUEST',
          {
            type: 'UPLOAD_TRANSFER_SLIP_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'UPLOAD_TRANSFER_SLIP_FAILURE'
        ]
      }
    }
  )
)
// Delete Postal Track
export const deleteItemInCart = (id,token)=> (
  {[CALL_API]: {
    endpoint: ORDER_ENDPOINT+id+'/delete_track/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'DELETE',
    types: ['DELETE_POSTAL_REQUEST', 'DELETE_POSTAL_SUCCESS', 'DELETE_POSTAL_FAILURE']
  }}
)

// Confirm Payment
export const confirmPayment= (data,id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ORDER_ENDPOINT+id+'/confirm/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'CONFIRM_PAYMENT_REQUEST',
          {
            type: 'CONFIRM_PAYMENT_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
              })
            }
          },
          'CONFIRM_PAYMENT_FAILURE'
        ]
      }
    }
  )
)

// Unconfirm Payment
export const unConfirmPayment = (id,token)=> (
  {[CALL_API]: {
    endpoint: ORDER_ENDPOINT+id+'/deconfirm/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'DELETE',
    types: ['UNCONFIRM_PAYMENT_REQUEST', 'UNCONFIRM_PAYMNET_SUCCESS', 'UNCONFITM_PAYMENT_FAILURE']
  }}
)

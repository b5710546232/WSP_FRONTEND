import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {PAYMENTMETHOD_ENDPOINT} from '../constants/endpoints'

// Add new Product [Staff]
export const createPaymentMethod = (data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: PAYMENTMETHOD_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'CREATE_PAYMENTMETHOD_REQUEST',
          {
            type: 'CREATE_PAYMENTMETHOD_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                console.log('paymethod',data);
                return data
              })
            }
          },
          'CREATE_PAYMENTMETHOD_FAILURE'
        ]
      }
    }
  )
)
// List Payment Method [All(limit),Staff]
export const loadPaymentMethodList = () => (
  {[CALL_API]: {
    endpoint: PAYMENTMETHOD_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_PAYMENTMETHOD_LIST_REQUEST', 'LOAD_PAYMENTMETHOD_LIST_SUCCESS', 'LOAD_PAYMENTMETHOD_LIST_FAILURE']
  }}
)

// Get Payment Method
export const loadPaymentMethod = (id) => (
  {[CALL_API]: {
    endpoint: PAYMENTMETHOD_ENDPOINT+id+'/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_PAYMENTMETHOD_REQUEST', 'LOAD_PAYMENTMETHOD_SUCCESS', 'LOAD_PAYMENTMETHOD_FAILURE']
  }}
)

// Edit Payment Method [Staff]
export const updatePaymentMethod = (data,id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: PAYMENTMETHOD_ENDPOINT+id+'/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'UPDATE_PAYMENTMETHOD_REQUEST',
          {
            type: 'UPDATE_PAYMENTMETHOD_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadCategoryList())
                return data
              })
            }
          },
          'UPDATE_PAYMENTMETHOD_FAILURE'
        ]
      }
    }
  )
)
// Deactive Payment Method [Staff]
export const deletePaymentMethod = (id,token)=> (
  {[CALL_API]: {
    endpoint: PAYMENTMETHOD_ENDPOINT+id+'/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'DELETE',
    types: ['DELETE_PAYMENTMETHOD_REQUEST', 'DELETE_PAYMENTMETHOD_SUCCESS', 'DELETE_PAYMENTMETHOD_FAILURE']
  }}
)
// Reactive Payment Method [Staff]
export const reactivePaymentMethod = (id,token) => (
  {[CALL_API]: {
    endpoint: PAYMENTMETHOD_ENDPOINT+id+'/reactive/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'PUT',
    types: ['REACTIVE_PAYMENTMETHOD_REQUEST', 'REACTIVE_PAYMENTMETHOD_SUCCESS', 'REACTIVE_PAYMENTMETHOD_FAILURE']
  }}
)

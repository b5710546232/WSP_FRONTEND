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

// Get Credit Card Token From Paypal
const AUTH_ID = 'AeMa_jaHkdJJdMWgyOD2y5O9AL6NtnEeYrFlXxY51vEyo3-HOd2YHDMVxGdoAK2c8v_1UO5UYa5Piza-:EAuj6P6rT7T7a9ZuBLKPsxkCfkr-YJ190CeOZ19yQshkKlme8HT39K-O0TUYyaMHXSnnE_ymls_PTCBW'
export const getCreditCardToken = (token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: PAYPAL_ENDPOINT,
        headers: {
          Accept: 'application/json',
         'Accept-Language': "es_US",
          Authorization: 'Basic ' + AUTH_ID,
         'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(data),
        data: {
         grant_type: 'client_credentials'
       },
        method: 'POST',
        types: [
          'GETCREDITCARDTOKEN_REQUEST',
          {
            type: 'GETCREDITCARDTOKEN_SUCCESS',
            payload: (res) => {
              return res.json().then((data) => {
                console.log('paymethod',data);
                return data
              }).catch((err) => {
                console.log(err);
              })
            }
          }
        ]
      }
    }
  )
)

import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {PRODUCT_ENDPOINT} from '../constants/endpoints'

// Add new Product [Staff]
export const createProduct = (data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: PRODUCT_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'CREATE_PRODUCT_REQUEST',
          {
            type: 'CREATE_PRODUCT_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'CREATE_PRODUCT_FAILURE'
        ]
      }
    }
  )
)
// List product [All(limit),Staff]
export const loadProductList = () => (
  {[CALL_API]: {
    endpoint: PRODUCT_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_PRODUCT_LIST_REQUEST', 'LOAD_PRODUCT_LIST_SUCCESS', 'LOAD_PRODUCT_LIST_FAILURE']
  }}
)

// Get product
export const loadProduct = (id) => (
  {[CALL_API]: {
    endpoint: PRODUCT_ENDPOINT+id+'/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_PRODUCT_REQUEST', 'LOAD_PRODUCT_SUCCESS', 'LOAD_PRODUCT_FAILURE']
  }}
)

// Edit Product [Staff]
export const updateProduct = (data,id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: PRODUCT_ENDPOINT+id+'/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'UPDATE_PRODUCT_REQUEST',
          {
            type: 'UPDATE_PRODUCT_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadCategoryList())
                return data
              })
            }
          },
          'UPDATE_PRODUCT_FAILURE'
        ]
      }
    }
  )
)
// Deactive Product [Staff]
export const deleteProduct = (id,token)=> (
  {[CALL_API]: {
    endpoint: PRODUCT_ENDPOINT+id+'/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'DELETE',
    types: ['DELETE_PRODUCT_REQUEST', 'DELETE_PRODUCT_SUCCESS', 'DELETE_PRODUCT_FAILURE']
  }}
)
// Reactive Product [Staff]
export const reactiveProduct = (id,token) => (
  {[CALL_API]: {
    endpoint: PRODUCT_ENDPOINT+id+'/reactive/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'PUT',
    types: ['REACTIVE_PRODUCT_REQUEST', 'REACTIVE_PRODUCT_SUCCESS', 'REACTIVE_PRODUCT_FAILURE']
  }}
)

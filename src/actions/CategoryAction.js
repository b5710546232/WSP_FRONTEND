import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {CATEGORY_ENDPOINT,USER_ENDPOINT,LOGIN_ENDPOINT} from '../constants/endpoints'

// Add new Category [Staff]
export const createCategory = (data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: CATEGORY_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'CREATE_CATEGORY_REQUEST',
          {
            type: 'CREATE_CATEGORY_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'CREATE_CATEGORY_FAILURE'
        ]
      }
    }
  )
)
// List category [All(limit),Staff]
export const loadCategoryList = () => (
  {[CALL_API]: {
    endpoint: CATEGORY_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_CATEGORY_LIST_REQUEST', 'LOAD_CATEGORY_LIST_SUCCESS', 'LOAD_CATEGORY_LIST_FAILURE']
  }}
)

// Get category
export const loadCategory = (id) => (
  {[CALL_API]: {
    endpoint: CATEGORY_ENDPOINT+id+'/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_CATEGORY_REQUEST', 'LOAD_CATEGORY_SUCCESS', 'LOAD_CATEGORY_FAILURE']
  }}
)
// Get product in category
export const loadProductInCategory = (id) => (
  {[CALL_API]: {
    endpoint: CATEGORY_ENDPOINT+id+'/product/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_PRODUCT_IN_CATEGORY_REQUEST', 'LOAD_PRODUCT_IN_CATEGORY_SUCCESS', 'LOAD_PRODUCT_IN_CATEGORY_FAILURE']
  }}
)
// Edit Category [Staff]
export const updateCategory = (data,id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: CATEGORY_ENDPOINT+id+'/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'UPDATE_CATEGORY_REQUEST',
          {
            type: 'UPDATE_CATEGORY_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadCategoryList())
                return data
              })
            }
          },
          'UPDATE_CATEGORY_FAILURE'
        ]
      }
    }
  )
)
// Deactive Category [Staff]
export const deleteCategory = (id,token)=> (
  {[CALL_API]: {
    endpoint: CATEGORY_ENDPOINT+id+'/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'DELETE',
    types: ['DELETE_CATEGORY_REQUEST', 'DELETE_CATEGORY_SUCCESS', 'DELETE_CATEGORY_FAILURE']
  }}
)
// Reactive Category [Staff]
export const reactiveCategory = (id,token) => (
  {[CALL_API]: {
    endpoint: CATEGORY_ENDPOINT+id+'/reactive/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'PUT',
    types: ['REACTIVE_CATEGORY_REQUEST', 'REACTIVE_CATEGORY_SUCCESS', 'REACTIVE_CATEGORY_FAILURE']
  }}
)

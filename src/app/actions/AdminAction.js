import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {
  ADMIN_USER_ENDPOINT,
  ADMIN_ADDRESS_ENDPOINT,
  ADMIN_ORDER_ENDPOINT,
  ADMIN_CATEGORY_ENDPOINT,
  ADMIN_PRODUCT_ENDPOINT,
  ADMIN_ITEMLINE_ENDPOINT,
  ADMIN_METHOD_ENDPOINT
} from '../constants/endpoints'

export const loadUser = (token) => (
  {[CALL_API]: {
    endpoint: ADMIN_USER_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_ADMIN_USER_REQUEST', 'LOAD_ADMIN_USER_SUCCESS', 'LOAD_ADMIN_USER_FAILURE']
  }}
)

export const createUser = (data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_USER_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
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

export const updateUser = (id,data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_USER_ENDPOINT+id+'/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
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
export const loadAddress = (token) => (
  {[CALL_API]: {
    endpoint: ADMIN_ADDRESS_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_ADMIN_ADDRESS_REQUEST', 'LOAD_ADMIN_ADDRESS_SUCCESS', 'LOAD_ADMIN_ADDRESS_FAILURE']
  }}
)

export const createAddress = (data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_ADDRESS_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'CREATE_ADDRESS_ADMIN_REQUEST',
          {
            type: 'CREATE_ADDRESS_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'CREATE_ADDRESS_ADMIN_FAILURE'
        ]
      }
    }
  )
)

export const updateAddress = (id,data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_ADDRESS_ENDPOINT+id+'/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'UPDATE_ADDRESS_ADMIN_REQUEST',
          {
            type: 'UPDATE_ADDRESS_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'UPDATE_ADDRESS_ADMIN_FAILURE'
        ]
      }
    }
  )
)
export const loadProduct = (token) => (
  {[CALL_API]: {
    endpoint: ADMIN_PRODUCT_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_ADMIN_PRODUCT_REQUEST', 'LOAD_ADMIN_PRODUCT_SUCCESS', 'LOAD_ADMIN_PRODUCT_FAILURE']
  }}
)

export const createProduct = (data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_PRODUCT_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'CREATE_PRODUT_ADMIN_REQUEST',
          {
            type: 'CREATE_PRODUCT_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'CREATE_PRODUCT_ADMIN_FAILURE'
        ]
      }
    }
  )
)

export const updateProduct = (id,data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_PRODUCT_ENDPOINT+id+'/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'UPDATE_PRODUCT_ADMIN_REQUEST',
          {
            type: 'UPDATE_PRODUCT_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'UPDATE_PRODUCT_ADMIN_FAILURE'
        ]
      }
    }
  )
)
export const loadCategory = (token) => (
  {[CALL_API]: {
    endpoint: ADMIN_CATEGORY_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_ADMIN_CATEGORY_REQUEST', 'LOAD_ADMIN_CATEGORY_SUCCESS', 'LOAD_ADMIN_CATEGORY_FAILURE']
  }}
)

export const createCategory = (data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_CATEGORY_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'CREATE_CATEGORY_ADMIN_REQUEST',
          {
            type: 'CREATE_CATEGORY_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'CREATE_CATEGORY_ADMIN_FAILURE'
        ]
      }
    }
  )
)

export const updateCategory = (id,data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_CATEGORY_ENDPOINT+id+'/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'UPDATE_CATEGORY_ADMIN_REQUEST',
          {
            type: 'UPDATE_CATEGORY_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'UPDATE_CATEGORY_ADMIN_FAILURE'
        ]
      }
    }
  )
)

export const loadMethod = (token) => (
  {[CALL_API]: {
    endpoint: ADMIN_METHOD_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_ADMIN_METHOD_REQUEST', 'LOAD_ADMIN_METHOD_SUCCESS', 'LOAD_ADMIN_METHOD_FAILURE']
  }}
)

export const createMethod = (data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_METHOD_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'CREATE_METHOD_ADMIN_REQUEST',
          {
            type: 'CREATE_METHOD_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'CREATE_METHOD_ADMIN_FAILURE'
        ]
      }
    }
  )
)

export const updateMethod = (id,data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_METHOD_ENDPOINT+id+'/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'UPDATE_METHOD_ADMIN_REQUEST',
          {
            type: 'UPDATE_METHOD_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'UPDATE_METHOD_ADMIN_FAILURE'
        ]
      }
    }
  )
)

export const loadOrder = (token) => (
  {[CALL_API]: {
    endpoint: ADMIN_ORDER_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_ADMIN_ORDER_REQUEST', 'LOAD_ADMIN_ORDER_SUCCESS', 'LOAD_ADMIN_ORDER_FAILURE']
  }}
)

export const loadItemLine = (token) => (
  {[CALL_API]: {
    endpoint: ADMIN_ITEMLINE_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_ADMIN_ITEMLINE_REQUEST', 'LOAD_ADMIN_ITEMLINE_SUCCESS', 'LOAD_ADMIN_ITEMLINE_FAILURE']
  }}
)

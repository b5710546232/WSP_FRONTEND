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
                dispatch(loadUser(token))
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
                dispatch(loadUser(token))
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
                dispatch(loadProduct(token))
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
                dispatch(loadProduct(token))
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
                dispatch(loadCategory(token))
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
                dispatch(loadCategory(token))
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
                dispatch(loadMethod(token))
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
                dispatch(loadMethod(token))
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
export const confirmPayment = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_ORDER_ENDPOINT+id+'/confirmPayment/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        types: [
          'COMFIRM_PAYMENT_ADMIN_REQUEST',
          {
            type: 'COMFIRM_PAYMENT_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadOrder(token))
                return data
              })
            }
          },
          'COMFIRM_PAYMENT_ADMIN_FAILURE'
        ]
      }
    }
  )
)
export const unconfirmPayment = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_ORDER_ENDPOINT+id+'/unconfirmPayment/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        types: [
          'UNCOMFIRM_PAYMENT_ADMIN_REQUEST',
          {
            type: 'UNCOMFIRM_PAYMENT_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadOrder(token))
                return data
              })
            }
          },
          'UNCOMFIRM_PAYMENT_ADMIN_FAILURE'
        ]
      }
    }
  )
)
export const updateTrack = (id,data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_ORDER_ENDPOINT+id+'/updateTrack/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        body: JSON.stringify(data),
        method: 'PUT',
        types: [
          'UPDATE_TRACK_ADMIN_REQUEST',
          {
            type: 'UPDATE_TRACK_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadOrder(token))
                return data
              })
            }
          },
          'UPDATE_TRACK_ADMIN_FAILURE'
        ]
      }
    }
  )
)
export const deleteTrack = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_ORDER_ENDPOINT+id+'/deleteTrack/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        types: [
          'DELETE_TRACK_ADMIN_REQUEST',
          {
            type: 'DELETE_TRACK_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadOrder(token))
                return data
              })
            }
          },
          'DELETE_TRACK_ADMIN_FAILURE'
        ]
      }
    }
  )
)
export const deactiveUser = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
          endpoint: ADMIN_USER_ENDPOINT+id+'/',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Token '+token
          },
          method: 'DELETE',
        types: [
          'DEACTIVE_USER_ADMIN_REQUEST',
          {
            type: 'DEACTIVE_USER_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              dispatch(loadUser(token))
              return data
            }
          },
          'DEACTIVE_USER_ADMIN_FAILURE'
        ]
      }
    }
  )
)
  // {[CALL_API]: {
  //   endpoint: ADMIN_USER_ENDPOINT+id+'/',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'Authorization':'Token '+token
  //   },
  //   method: 'DELETE',
  //   types: ['DEACTIVE_USER_ADMIN_REQUEST', 'DEACTIVE_USER_ADMIN_SUCCESS', 'DEACTIVE_USER_ADMIN_FAILURE']
  // }}

export const reactiveUser = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_USER_ENDPOINT+id+'/reactive/',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Token '+token
          },
          method: 'PUT',
        types: [
          'REACTIVE_USER_ADMIN_REQUEST',
          {
            type: 'REACTIVE_USER_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              dispatch(loadUser(token))
              return data
            }
          },
          'REACTIVE_USER_ADMIN_FAILURE'
        ]
      }
    }
  )
)
  // {[CALL_API]: {
  //   endpoint: ADMIN_USER_ENDPOINT+id+'/reactive/',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'Authorization':'Token '+token
  //   },
  //   method: 'PUT',
  //   types: ['REACTIVE_USER_ADMIN_REQUEST', 'REACTIVE_USER_ADMIN_SUCCESS', 'REACTIVE_USER_ADMIN_FAILURE']
  // }}
// )
export const deactiveProduct = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_PRODUCT_ENDPOINT+id+'/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
          method: 'DELETE',
        types: [
          'DEACTIVE_PRODUCT_ADMIN_REQUEST',
          {
            type: 'DEACTIVE_PRODUCT_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              dispatch(loadProduct(token))
              return data
            }
          },
          'DEACTIVE_PRODUCT_ADMIN_FAILURE'
        ]
      }
    }
  )
)

// {[CALL_API]: {
//   endpoint: ADMIN_PRODUCT_ENDPOINT+id+'/',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'Authorization':'Token '+token
//   },
//   method: 'DELETE',
//   types: ['DEACTIVE_PRODUCT_ADMIN_REQUEST', 'DEACTIVE_PRODUCT_ADMIN_SUCCESS', 'DEACTIVE_PRODUCT_ADMIN_FAILURE']
// }}
export const reactiveProduct = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: ADMIN_PRODUCT_ENDPOINT+id+'/reactive/',
        headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization':'Token '+token
            },
        method: 'PUT',
        types: [
          'REACTIVE_PRODUCT_ADMIN_REQUEST',
          {
            type: 'REACTIVE_PRODUCT_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadProduct(token))
                return data
              })
            }
          },
          'REACTIVE_PRODUCT_ADMIN_FAILURE'
        ]
      }
    }
  )
)
//   {[CALL_API]: {
//     endpoint: ADMIN_PRODUCT_ENDPOINT+id+'/reactive/',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization':'Token '+token
//     },
//     method: 'PUT',
//     types: ['REACTIVE_PRODUCT_ADMIN_REQUEST', 'REACTIVE_PRODUCT_ADMIN_SUCCESS', 'REACTIVE_PRODUCT_ADMIN_FAILURE']
//   }}
// )
export const deactiveCategory = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
            endpoint: ADMIN_CATEGORY_ENDPOINT+id+'/',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization':'Token '+token
            },
            method: 'DELETE',
        types: [
          'DEACTIVE_CATEGORY_ADMIN_REQUEST',
          {
            type: 'DEACTIVE_CATEGORY_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              dispatch(loadCategory(token))
              return data
            }
          },
          'DEACTIVE_CATEGORY_ADMIN_FAILURE'
        ]
      }
    }
  )
)
//   {[CALL_API]: {
//     endpoint: ADMIN_CATEGORY_ENDPOINT+id+'/',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization':'Token '+token
//     },
//     method: 'DELETE',
//     types: ['DEACTIVE_CATEGORY_ADMIN_REQUEST', 'DEACTIVE_CATEGORY_ADMIN_SUCCESS', 'DEACTIVE_CATEGORY_ADMIN_FAILURE']
//   }}
// )
export const reactiveCategory = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
          endpoint: ADMIN_CATEGORY_ENDPOINT+id+'/reactive/',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Token '+token
          },
          method: 'PUT',
        types: [
          'REACTIVE_CATEGORY_ADMIN_REQUEST',
          {
            type: 'REACTIVE_CATEGORY_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              dispatch(loadCategory(token))
              return data
            }
          },
          'REACTIVE_CATEGORY_ADMIN_FAILURE'
        ]
      }
    }
  )
)
//   {[CALL_API]: {
//     endpoint: ADMIN_CATEGORY_ENDPOINT+id+'/reactive/',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization':'Token '+token
//     },
//     method: 'PUT',
//     types: ['REACTIVE_CATEGORY_ADMIN_REQUEST', 'REACTIVE_CATEGORY_ADMIN_SUCCESS', 'REACTIVE_CATEGORY_ADMIN_FAILURE']
//   }}
// )
export const deactiveMethod = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
          endpoint: ADMIN_METHOD_ENDPOINT+id+'/',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Token '+token
          },
          method: 'DELETE',
        types: [
          'DEACTIVE_METHOD_ADMIN_REQUEST',
          {
            type: 'DEACTIVE_METHOD_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              dispatch(loadMethod(token))
              return data
            }
          },
          'DEACTIVE_USER_ADMIN_FAILURE'
        ]
      }
    }
  )
)
//   {[CALL_API]: {
//     endpoint: ADMIN_METHOD_ENDPOINT+id+'/',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization':'Token '+token
//     },
//     method: 'DELETE',
//     types: ['DEACTIVE_METHOD_ADMIN_REQUEST', 'DEACTIVE_METHOD_ADMIN_SUCCESS', 'DEACTIVE_METHOD_ADMIN_FAILURE']
//   }}
// )
export const reactiveMethod = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
          endpoint: ADMIN_METHOD_ENDPOINT+id+'/reactive/',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Token '+token
          },
          method: 'PUT',
        types: [
          'REACTIVE_METHOD_ADMIN_REQUEST',
          {
            type: 'REACTIVE_METHOD_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              dispatch(loadMethod(token))
              return data
            }
          },
          'REACTIVE_USER_ADMIN_FAILURE'
        ]
      }
    }
  )
)
//   {[CALL_API]: {
//     endpoint: ADMIN_METHOD_ENDPOINT+id+'/reactive/',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization':'Token '+token
//     },
//     method: 'PUT',
//     types: ['REACTIVE_METHOD_ADMIN_REQUEST', 'REACTIVE_METHOD_ADMIN_SUCCESS', 'REACTIVE_METHOD_ADMIN_FAILURE']
//   }}
// )
export const assignStaff = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
          endpoint: ADMIN_USER_ENDPOINT+id+'/assign_staff/',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Token '+token
          },
          method: 'PUT',
        types: [
          'ASSIGN_STAFF_ADMIN_REQUEST',
          {
            type: 'ASSIGN_STAFF_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              dispatch(loadUser(token))
              return data
            }
          },
          'ASSIGN_STAFF_ADMIN_FAILURE'
        ]
      }
    }
  )
)
//   {[CALL_API]: {
//     endpoint: ADMIN_USER_ENDPOINT+id+'/assign_staff/',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization':'Token '+token
//     },
//     method: 'PUT',
//     types: ['ASSIGN_STAFF_ADMIN_REQUEST', 'ASSIGN_STAFF_ADMIN_SUCCESS', 'ASSIGN_STAFF_ADMIN_FAILURE']
//   }}
// )
export const fireStaff = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
          endpoint: ADMIN_USER_ENDPOINT+id+'/fire_staff/',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Token '+token
          },
          method: 'PUT',
        types: [
          'FIRE_STAFF_ADMIN_REQUEST',
          {
            type: 'FIRE_STAFF_ADMIN_SUCCESS',
            payload: (_action, _state, res) => {
              dispatch(loadUser(token))
              return data
            }
          },
          'FIRE_STAFF_ADMIN_FAILURE'
        ]
      }
    }
  )
)
//
//   {[CALL_API]: {
//     endpoint: ADMIN_USER_ENDPOINT+id+'/fire_staff/',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization':'Token '+token
//     },
//     method: 'PUT',
//     types: ['FIRE_STAFF_ADMIN_REQUEST', 'FIRE_STAFF_ADMIN_SUCCESS', 'FIRE_STAFF_ADMIN_FAILURE']
//   }}
// )

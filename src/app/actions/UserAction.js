import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {REGISTER_ENDPOINT,USER_ENDPOINT,LOGIN_ENDPOINT,ADMIN_ENDPOINT} from '../constants/endpoints'

//logout
export const logout = ()=> {
  return {
    type: Action.LOGOUT
  }
}
//load user data
export const loadUserdata = (token) => (
  {[CALL_API]: {
    endpoint: USER_ENDPOINT+'0/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_USER_DATA_REQUEST', 'LOAD_USER_DATA_SUCCESS', 'LOAD_USER_DATA_FAILURE']
  }}
)

// Get list of user [Staff Only]
export const loadUserdataList = (token) => (
  {[CALL_API]: {
    endpoint: USER_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_USER_LIST_REQUEST', 'LOAD_USER_LIST_SUCCESS', 'LOAD_USER_LIST_FAILURE']
  }}
)

// True if admin [Admin Only]
export const check_admin = (token) => (
  {[CALL_API]: {
    endpoint: ADMIN_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['CHECK_ADMIN_REQUEST', 'CHECK_ADMIN_SUCCESS', 'CHECK_AMDIN_FAILURE']
  }}
)
//
export const login = (data) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: LOGIN_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'RECEIVE_ACCESS_TOKEN_REQUEST',
          {
            type: 'RECEIVE_ACCESS_TOKEN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadUserdata(data.token))
                return data
              })
            }
          },
          'RECEIVE_ACCESS_TOKEN_FAILURE'
        ]
      }
    }
  )
)

// Register new user
export const register = (data) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: REGISTER_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'REGISTER_REQUEST',
          {
            type: 'REGISTER_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'REGISTER_FAILURE'
        ]
      }
    }
  )
)

// Deactive user [Staff(Only Not Staff),Admin]
export const deactiveUser = (id,token)=> (
  {[CALL_API]: {
    endpoint: USER_ENDPOINT+id+'/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'DELETE',
    types: ['DEACTIVE_USER_REQUEST', 'DEACTIVE_USER_SUCCESS', 'DEACTIVE_USER_FAILURE']
  }}
)
// Change password [Owner]

export const changePassword= (data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: USER_ENDPOINT+'change_password/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'CHANGE_PASSWORD_REQUEST',
          {
            type: 'CHANGE_PASSWORD_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'CHANGE_PASSWORD_FAILURE'
        ]
      }
    }
  )
)

// Edit User [Owner(Limit),Staff[Only Not staff],Admin]
export const editUser= (data,id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: USER_ENDPOINT+id+'/edit/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        body: JSON.stringify(data),
        types: [
          'EDIT_USER_REQUEST',
          {
            type: 'EDIT_USER_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                console.log(data);
                return data
              })
            }
          },
          'EDIT_USER_FAILURE'
        ]
      }
    }
  )
)

import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {USER_ENDPOINT,LOGIN_ENDPOINT} from '../constants/endpoints'

export const logout = ()=> {
  return {
    type: Action.LOGOUT
  }
}

export const loadUserdata = (data) => (
  {[CALL_API]: {
    endpoint: USER_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+data.token
    },
    method: 'GET',
    types: ['LOAD_USER_DATA_REQUEST', 'LOAD_USER_DATA_SUCCESS', 'LOAD_USER_DATA_FAILURE']
  }}
)

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
                dispatch(loadUserdata(data))
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

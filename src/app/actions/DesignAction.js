import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {DESIGN_ENDPOINT} from '../constants/endpoints'

// Add Design
export const addDesign = (data,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: DESIGN_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'POST',
        body: JSON.stringify(data),
        types: [
          'ADD_DESIGN_REQUEST',
          {
            type: 'ADD_DESIGN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'ADD_DESIGN_FAILURE'
        ]
      }
    }
  )
)
// List category [All(limit),Staff]
export const loadDesinList = () => (
  {[CALL_API]: {
    endpoint: DESIGN_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_DESIGN_LIST_REQUEST', 'LOAD_DESIGN_LIST_SUCCESS', 'LOAD_DESIGN_LIST_FAILURE']
  }}
)

// delete Design
export const deleteDesign = (id,token)=> (
  {[CALL_API]: {
    endpoint: DESIGN_ENDPOINT+id+'/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'DELETE',
    types: ['DELETE_DESIGN_REQUEST', 'DELETE_DESIGN_SUCCESS', 'DELETE_DESIGN_FAILURE']
  }}
)

export const submitDesign = (token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: DESIGN_ENDPOINT+'submit/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'POST',
        types: [
          'SUBMIT_DESIGN_REQUEST',
          {
            type: 'SUMBIT_DESIGN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'SUBMIT_DESIGN_FAILURE'
        ]
      }
    }
  )
)

export const deSubmitDesign = (token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: DESIGN_ENDPOINT+'desubmit/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'POST',
        types: [
          'DESUBMIT_DESIGN_REQUEST',
          {
            type: 'DESUMBIT_DESIGN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                return data
              })
            }
          },
          'DESUBMIT_DESIGN_FAILURE'
        ]
      }
    }
  )
)

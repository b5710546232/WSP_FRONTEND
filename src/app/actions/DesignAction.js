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
                dispatch(loadDesignList(token))
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

export const loadDesignList = (token) => (
  {[CALL_API]: {
    endpoint: DESIGN_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Token '+token
    },
    method: 'GET',
    types: ['LOAD_DESIGN_LIST_REQUEST', 'LOAD_DESIGN_LIST_SUCCESS', 'LOAD_DESIGN_LIST_FAILURE']
  }}
)

// delete Design
export const deleteDesign = (id,token)=> (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: DESIGN_ENDPOINT+id+'/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'DELETE',
        types: [
          'DELETE_DESIGN_REQUEST',
          {
            type: 'DELETE_DESIGN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadDesignList(token))
                return data
              })
            }
          },
          'DELETE_DESIGN_FAILURE'
        ]
      }
    }
  )
)

export const submitDesign = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: DESIGN_ENDPOINT+id+'/submit/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        types: [
          'SUBMIT_DESIGN_REQUEST',
          {
            type: 'SUMBIT_DESIGN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadDesignList(token))
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

export const deSubmitDesign = (id,token) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: DESIGN_ENDPOINT+id+'/desubmit/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Token '+token
        },
        method: 'PUT',
        types: [
          'DESUBMIT_DESIGN_REQUEST',
          {
            type: 'DESUMBIT_DESIGN_SUCCESS',
            payload: (_action, _state, res) => {
              return res.json().then((data) => {
                dispatch(loadDesignList(token))
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

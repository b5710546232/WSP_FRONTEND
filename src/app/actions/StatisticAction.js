import {Action} from '../constants';
import { CALL_API } from 'redux-api-middleware'
import {STATISTIC_ENDPOINT} from '../constants/endpoints'

export const loadProduct = () => (
  {[CALL_API]: {
    endpoint: STATISTIC_ENDPOINT+'product/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_STAT_PRODUCT_REQUEST', 'LOAD_STAT_PRODUCT_SUCCESS', 'LOAD_STAT_PRODUCT_FAILURE']
  }}
)

export const loadCategory = () => (
  {[CALL_API]: {
    endpoint: STATISTIC_ENDPOINT+'category/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_STAT_CATEGORY_REQUEST', 'LOAD_STAT_CATEGORY_SUCCESS', 'LOAD_STAT_CATEGORY_FAILURE']
  }}
)

export const loadMoneyProduct = () => (
  {[CALL_API]: {
    endpoint: STATISTIC_ENDPOINT+'money/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_STAT_MONEYPRODUCT_REQUEST', 'LOAD_STAT_MONEYPRODUCT_SUCCESS', 'LOAD_STAT_MONEYPRODUCT_FAILURE']
  }}
)

export const loadUserPayment = () => (
  {[CALL_API]: {
    endpoint: STATISTIC_ENDPOINT+'user/payment/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_STAT_USERPAY_REQUEST', 'LOAD_STAT_USERPAY_SUCCESS', 'LOAD_STAT_USERPAY_FAILURE']
  }}
)
export const loadUserOrder = () => (
  {[CALL_API]: {
    endpoint: STATISTIC_ENDPOINT+'user/order/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_STAT_USERORDER_REQUEST', 'LOAD_STAT_USERORDER_SUCCESS', 'LOAD_STAT_USERORDER_FAILURE']
  }}
)

export const loadUserShiping = () => (
  {[CALL_API]: {
    endpoint: STATISTIC_ENDPOINT+'user/shipping/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_STAT_USERSHIP_REQUEST', 'LOAD_STAT_USERSHIP_SUCCESS', 'LOAD_STAT_USERSHIP_FAILURE']
  }}
)

export const loadAddress = () => (
  {[CALL_API]: {
    endpoint: STATISTIC_ENDPOINT+'address/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    types: ['LOAD_STAT_ADDRESS_REQUEST', 'LOAD_STAT_ADDRESS_SUCCESS', 'LOAD_STAT_ADDRESS_FAILURE']
  }}
)

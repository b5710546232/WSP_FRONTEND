import { combineReducers } from 'redux'
import user from './user'
import categories from './categories'
import products from './products'
import cart from './cart'
import orders from './orders'
import paymentMethods from './paymentMethods'
import address from './address'
import admin from './admin'
import design from './design'
import filters from './filters'
import itemlines from './itemlines'
import validator from './validator'
import bottle from './bottle'
import logo from './logo'
import statistic from './statistic'
import search from './search'
import sorts from './sorts'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  user,
  routing: routerReducer,
  cart,
  products,
  design,
  statistic,
  orders,
  paymentMethods,
  address,
  categories,
  filters,
  admin,
  itemlines,
  validator,
  search,
  sorts
})
export default rootReducer

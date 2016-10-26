import { combineReducers } from 'redux'
import user from './user'
import categories from './categories'
import products from './products'
import cart from './cart'
import orders from './orders'
import paymentMethods from './paymentMethods'
import address from './address'
import admin from './admin'
import filters from './filters'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  user,
  routing: routerReducer,
  cart,
  products,
  orders,
  paymentMethods,
  address,
  categories,
  filters,
  admin
})
export default rootReducer

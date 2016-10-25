import { combineReducers } from 'redux'
import user from './user'
import categories from './categories'
import products from './products'
import cart from './cart'
import address from './address'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  user,
  routing: routerReducer,
  cart,
  products,
  address,
  categories})
export default rootReducer

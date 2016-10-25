import { combineReducers } from 'redux'
import authed from './authed'
import categories from './categories'
import products from './products'
import cart from './cart'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({authed,
  routing: routerReducer,
  cart,
  products,
  categories})
export default rootReducer

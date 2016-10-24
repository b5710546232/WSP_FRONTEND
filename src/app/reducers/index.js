import { combineReducers } from 'redux'
import authed from './authed'
import categories from './categories'
import products from './products'
import { routerReducer } from 'react-router-redux'
const rootReducer = combineReducers({authed,routing: routerReducer,products,categories})
export default rootReducer

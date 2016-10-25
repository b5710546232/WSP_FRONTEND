import { combineReducers } from 'redux'
import authed from './authed'
import categories from './categories'
import products from './products'
import cartReducer from './cartReducer'
import { routerReducer } from 'react-router-redux'
const rootReducer = combineReducers({authed,routing: routerReducer,cartReducer,products,categories})
export default rootReducer

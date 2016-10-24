import { combineReducers } from 'redux'
import authed from './authed'
import categories from './categories'
import { routerReducer } from 'react-router-redux'
console.log('routerReducer',routerReducer);
const rootReducer = combineReducers({authed,routing: routerReducer,categories})
export default rootReducer

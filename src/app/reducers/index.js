import { combineReducers } from 'redux'
import authed from './authed'
import categories from './categories'
const rootReducer = combineReducers({authed,categories})

export default rootReducer

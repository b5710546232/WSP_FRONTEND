import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import {
  App,
  Home,
  Store,
  Admin,
  Design,
  Test
} from './components'

export default (store,history) => {
  return (
     <Router history={syncHistoryWithStore(history, store)}>
       <Router path='/' component={App}>
         <IndexRoute component={Home}/>
         <route path='/store'>
           <IndexRoute component={Store} />
         </route>
         <route path='/design'>
           <IndexRoute component={Design} />
         </route>
         <route path='/admin'>
           <IndexRoute component={Admin} />
         </route>
         <route path='/test'>
           <IndexRoute component={Test} />
         </route>
       </Router>
    </Router>
  )
}

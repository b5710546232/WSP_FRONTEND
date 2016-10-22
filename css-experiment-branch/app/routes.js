import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {
  App,
  Home,
  Store,
  Admin,
  Design
} from './components'

export default () => {
  return (
    <Router history={browserHistory}>
      <Router path='/' component={App}>
        <IndexRoute component={Home}/>
        <route path='store'>
          <IndexRoute component={Store} />
        </route>
        <route path='design'>
          <IndexRoute component={Design} />
        </route>
        <route path='admin'>
          <IndexRoute component={Admin} />
        </route>
      </Router>
    </Router>
  )
}

import React, { Component } from 'react'
import Header from './Header'
import Login from '../Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Login/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Header from './Header'
import Preview from './Slide-preview'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
export default class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Preview/>
        {/* <Login/> */}
      </div>
    )
  }
}

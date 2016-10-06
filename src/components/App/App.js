import React, { Component } from 'react'
import Header from './Header'
import Preview from './Slide-preview'
import Footer from './Footer-menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css'
// import 'bootstrap-material-design/dist/js/material.min.js'
export default class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <br/><br/>
        <Preview/>
        <Footer/>
      </div>
    )
  }
}

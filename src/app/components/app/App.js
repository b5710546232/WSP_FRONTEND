import React, { Component } from 'react'
import HeaderNavbar from '../header/HeaderNavbar'
import AppFooter from '../footer/AppFooter'
export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderNavbar/>
          {this.props.children}
        <AppFooter/>
      </div>
    )
  }
}

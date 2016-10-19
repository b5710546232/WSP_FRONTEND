import React, { Component } from 'react'

export default class Header extends Component {

  render() {
    return (
      <div>
      <nav className="navbar nav-app  navbar-fixed-top navbar_status">
      <div className="container-fluid">
        <ul className="nav navbar-nav navbar-right">
          <li>Cart : 100.00$&nbsp;&nbsp;</li>
        </ul>
      </div>
    </nav>
      </div>
    )
  }
}

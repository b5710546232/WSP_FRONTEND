import React, { Component } from 'react'
import '../../../dist/scss/navbar.scss'
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-light bg-primary" >
        <button className="navbar-toggler hidden-lg-up " type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-toggleable-md" id="navbarResponsive">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link " href="#">Nature Drink</a>
            </li>
            
            <li className="nav-item ">
              <a className="nav-link" href="#">Store<span className="sr-only">(current)</span></a>
            </li>

            <li className="nav-item ">
              <a className="nav-link" href="#">Design</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

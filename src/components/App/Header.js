// ui/components/App/Header.js
import React, { Component } from 'react'
import './Header.scss'
import {LoginModal} from '../Login'
import {RegisterModal} from '../Register'
import 'jquery'
// import 'bootstrap-sass'

export default class Header extends Component {

  render() {
    return (
      <div>
        <div className="navbar  navbar-default nav-app navbar-fixed-top">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mynavbar-content">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <ul className="nav navbar-nav navbar-center">
                <a className="navbar-brand" href="#">Nature Drink</a>
              </ul>
            </div>

            <div className="collapse navbar-collapse " id="mynavbar-content">
              <ul className="nav navbar-nav">
                <li ><a href="#">Home</a></li>
                <li ><a href="#">About</a></li>
                <li ><a href="#">Pricing</a></li>
                <li ><a href="#">Contact</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li ><LoginModal/></li>
                <li>&nbsp;</li>
                <li ><RegisterModal/></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

// ui/components/App/Header.js
import React, { Component } from 'react'
import './Header.scss'
import {LoginModal} from '../Login'
import {RegisterModal} from '../Register'
import { Link } from 'react-router'
import 'jquery'
// import 'bootstrap-sass'

export default class Header extends Component {

  render() {
    return (
      <div>
        <div className="navbar  navbar-default nav-app navbar-fixed-top">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle navbar-left" data-toggle="collapse" data-target="#mynavbar-content">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <li className="nav navbar-nav navbar-center">
                <Link className="navbar-brand" to={{ pathname:'/' }}>
                  Nature Drink
                </Link>
              </li>
            </div>

            <div className="collapse navbar-collapse " id="mynavbar-content">
              <ul className="nav navbar-nav">

                <li ><a href="#">น้ำชาย</a></li>
                <li ><a href="#">น้ำหญิง</a></li>
                <li ><a href="#">Pricing</a></li>
                <li >
                  <Link to={{ pathname:'/contact' }}>
                    Contact
                  </Link>
                </li>
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

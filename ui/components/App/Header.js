// ui/components/App/Header.js
import React, { Component } from 'react'
// import 'jquery'
// import 'bootstrap-sass'
// import Button from './Button'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mynavbar-content">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">STARBURSTEAM</a>
            </div>
            <div className="collapse navbar-collapse" id="mynavbar-content">
              <ul className="nav navbar-nav">
                <li ><a href="#">Home</a></li>
                <li ><a href="#">About</a></li>
                <li ><a href="#">Pricing</a></li>
                <li ><a href="#">Contract</a></li>
                <li ><a href="#">Feedback</a></li>
              </ul>
            </div>


          </div>
        </div>
      </div>
    )
  }
}

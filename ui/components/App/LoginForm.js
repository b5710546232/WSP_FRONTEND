// ui/components/App/Header.js
import React, { Component } from 'react'
import Input from './Input'
import { Checkbox } from 'react-bootstrap'
// import 'jquery'
// import 'bootstrap-sass'
// import Button from './Button'
import './Login.scss'
export default class Login extends Component {
  render() {
    return (
      <div className="text-center">
        <form
          className="LoginForm">
          <div className="inputContainerID row toInline">
              <span className="glyphicon glyphicon-user"></span>
              &nbsp;&nbsp;
              <Input id="name" type="text" placeholder="username" />
          </div>
          <br/>
          <div className="inputContainerPass row toInline">
              <span className="glyphicon glyphicon-lock"></span>
              &nbsp;&nbsp;
              <Input id="password" type="password"placeholder="password" />
        </div>
        <br/>
        <br/>
        <div>
          <div className="Remember"><Checkbox>Remember me</Checkbox></div>
        </div>
        <br/>
        <div className="ButtonLoginContainer toInline">
            <div className="loginBtn">
              <button className="btn btn-info">
                Log in <i className="fa fa-fw fa-chevron-right"></i>
              </button>
            </div>
        </div>
        <br/>
      </form>
    </div>
  )
}
}

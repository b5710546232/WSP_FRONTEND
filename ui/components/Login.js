// ui/components/App/Header.js
import React, { Component } from 'react'
import Input from './Input'
// import 'jquery'
// import 'bootstrap-sass'
// import Button from './Button'
import './Login.scss'
export default class Login extends Component {
  render() {
    return (
      <div className="LoginContainer container text-center">
        <label>Login</label>
        <br/>
        <br/>
        <form
          onSubmit="{this.props.onSubmit}"
          className="ModalForm">
          <div className="inputContainerID row">
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                  <div className="text-right">
                     <span className="glyphicon glyphicon-user"></span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <div className="text-left">
                  <Input
                    id="name"
                    type="text"
                    placeholder="username" />
                  </div>
                </div>
          </div>
          <br/>
          <div className="inputContainerPass row">
            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
              <div className="text-right">
                <span className="glyphicon glyphicon-lock"></span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div className="text-left">
                <Input
                  id="password"
                  type="password"
                  placeholder="password" />
              </div>
            </div>
        </div>
        <br/>
        <div className="ButtonLoginContainer">
        <button className="btn btn-info">
          Log in <i className="fa fa-fw fa-chevron-right"></i>
        </button>
        </div>
      </form>
    </div>
  )
}
}

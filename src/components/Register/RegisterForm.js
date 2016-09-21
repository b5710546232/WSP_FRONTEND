// ui/components/Register/RegisterForm.js
import React, { Component } from 'react'
import Input from '../Input'
import { Form } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import './Regis.scss'
export default class RegisForm extends Component {
  render() {
    return (
      <div className="text-center">
        <form className="RegisForm">
          <div className="inputContainerID row toInline">
            <p>Username</p>
            &nbsp;&nbsp;
            <Input id="name" type="text" placeholder="username" />
          </div>
          <br/>
          <div className="inputContainerPass row toInline">
            <p>Password</p>
            &nbsp;&nbsp;
            <Input id="password" type="password"placeholder="password" />
          </div>
          <br/>
          <div className="inputContainerConfirmPass row toInline">
            <p>Confirm Password</p>
            &nbsp;&nbsp;
            <Input id="password" type="password"placeholder="password" />
          </div>
          <br/>
          <div className="inputContainerFirstName row toInline">
            <p>Firstname</p>
            &nbsp;&nbsp;
            <Input id="password" type="password"placeholder="password" />
          </div>
          <br/>
          <div className="inputContainerLastName row toInline">
            <p>Lastname</p>
            &nbsp;&nbsp;
            <Input id="password" type="password"placeholder="password" />
          </div>
          <br/>
          <div className="inputContainerEmail row toInline">
            <p>Email</p>
            &nbsp;&nbsp;
            <Input id="password" type="password"placeholder="password" />
          </div>
          <br/>
          <br/>
          <div className="ButtonRegisContainer">
            <div className="regisBtn">
              <button className="btn btn-info">
                Sign up <i className="fa fa-fw fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
}

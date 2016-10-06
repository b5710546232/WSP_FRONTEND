// ui/components/Login/LoginForm.js
import React, { Component } from 'react'
import {Form} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {FormGroup} from 'react-bootstrap'
import {FieldGroup} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Input from '../Input'
import { Checkbox } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './Login.scss'
import 'whatwg-fetch'

// const API = 'http://localhost:8000/api/v1/member/detail/'
export default class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      username:'',
      password:'',
    };
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  login(e){
    e.preventDefault()
    console.log(this.refs.input_username.value);
    console.log(this.refs.input_password.value);
    var data = {
      username: this.state.username,
      password: this.state.password,
    }

    // fetch(API,
    // {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(
    //     data
    //   )
    // }).then(function(response) {
    //     if (!response.ok) {
    //         throw Error(response.statusText);
    //     }
    //     return response;
    // }).then(function(response) {
    //     console.log("ok");
    // }).catch(function(error) {
    //     console.log(error);
    // });
  }

  render() {
    return (
      <div className="text-center">
      <Form horizontal
      className="LoginForm">
      {/* <div className="inputContainerID row toInline">
      <span className="glyphicon glyphicon-user"></span>
      &nbsp;&nbsp;
      <input id="username" ref="input_username" type="text" placeholder="username" onChange={this.handleChange.bind(this)} required/>
      </div>
      <br/>
      <div className="inputContainerPass row toInline">
      <span className="glyphicon glyphicon-lock"></span>
      &nbsp;&nbsp;
      <input id="password" ref="input_password" type="password"placeholder="password" onChange={this.handleChange.bind(this)} required/>
      </div>
      <br/>
      <br/>
      <div>
      <div className="Remember"><Checkbox>Remember me</Checkbox></div>
      </div>
      <br/>
      <div className="ButtonLoginContainer toInline">
      <div className="loginBtn">
      <button type="button" className="btn btn-info" onClick={this.login.bind(this)}>
      Log in
      </button>
      </div>
      </div>
      <br/> */}

      <FormGroup controlId="formBasicText">
      <Col componentClass={ControlLabel} sm={2}>
      Username
      </Col>
      <Col sm={10}>
      <FormControl
      type="text"
      value={this.state.value}
      label="Username"
      placeholder="Input username"
      onChange={this.handleChange}
      />
      </Col>
      </FormGroup>

      <FormGroup controlId="formBasicText">
      <FormControl
      type="text"
      value={this.state.value}
      placeholder="Input password"
      onChange={this.handleChange}
      />
      </FormGroup>

      <Button bsStyle="info" bsSize="large" actives>Login</Button>


      </Form>
      </div>
    )
  }
}

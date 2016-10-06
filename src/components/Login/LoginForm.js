// ui/components/Login/LoginForm.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  Button,
  FieldGroup,
  Col} from 'react-bootstrap'
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

    // handleChange(event) {
    //   this.setState({[event.target.name]: event.target.value});
    // }

    login(e){
      e.preventDefault()
      console.log(ReactDOM.findDOMNode(this.refs.input_username).value);
      console.log(ReactDOM.findDOMNode(this.refs.input_password).value);
      var data = {
        username: this.refs.input_username.value,
        password: this.refs.input_password.value,
      }
    }

    render() {
      return (
        <div className="text-center">
        <Form horizontal
        className="LoginForm">

        <FormGroup controlId="formBasicText" >
        <Col componentClass={ControlLabel} sm={4}>
        Username
        </Col>
        <Col sm={6}>
        <FormControl
        type="text"
        ref="input_username"
        label="Username"
        placeholder="Input username"
        />
        </Col>
        </FormGroup>

        <FormGroup controlId="formBasicText">
        <Col componentClass={ControlLabel} sm={4}>
        Password
        </Col>
        <Col sm={6}>
        <FormControl
        type="password"
        ref="input_password"
        placeholder="Input password"
        />
        </Col>
        </FormGroup>

        <FormGroup>
        <Col smOffset={3} sm={5}>
        <Checkbox>Remember me</Checkbox>
        </Col>
        </FormGroup>

        <button className="waves-effect btn btn-primary btn-medium" onClick={this.login.bind(this)} >Login</button>


        </Form>
        </div>
      )
    }
  }

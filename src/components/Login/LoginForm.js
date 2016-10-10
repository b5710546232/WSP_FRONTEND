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
  // const API = 'http://localhost:8000/api/v1/member/login/'
  const API = 'http://158.108.138.84:8000/api/v1/member/login/'
  export default class Login extends Component {

    constructor(props){
      super(props);

      this.state = {
        validate_username:null,
        validate_password:null,
        login_sucess:null,
        token:null
      };
    }
    validateData(data){
      let check = true
      // let check_username = true
      // let check_password = true
      // destructor
      let {username,password} = data
      console.log(data);
      this.setState({validate_username:null})
      this.setState({validate_password:null})

      if(username === null || username ===''){
        // check_username = false
        check =false
        this.setState({validate_username:'error'})
        console.log("validate "+this.state.validate_username);
      }
      if(password === null || password ===''){
        // check_password = false
        check = false
        this.setState({validate_password:'error'})
        console.log("validate "+this.state.validate_password);
      }
      return check

    }

    // handleChange(event) {
    //   this.setState({[event.target.name]: event.target.value});
    // }
    login(e){
      e.preventDefault()
      console.log(ReactDOM.findDOMNode(this.refs.input_username).value);
      console.log(ReactDOM.findDOMNode(this.refs.input_password).value);

      let username = ReactDOM.findDOMNode(this.refs.input_username).value
      let password = ReactDOM.findDOMNode(this.refs.input_password).value
      let data = {
        username: username,
        password: password
      }
      if(this.validateData(data)){
        fetch(API,
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              data
            )
          }).then(function(response) {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response;
          }).then(function(response) {
            console.log("ok");
          }).catch(function(error) {
            console.log(error);
          });
        }
      }

      renderHint(bool){
        if(bool)
        return(
          <div>
          wrong something.
          </div>
        )
        else return
      }

      render() {
        return (
          <div className="text-center">
          <Form horizontal
          className="LoginForm">

          <FormGroup controlId="formBasicText"
          validationState={this.state.validate_username}>
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

          <FormGroup controlId="formBasicText"
          validationState={this.state.validate_password}>
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

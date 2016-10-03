// ui/components/Register/RegisterForm.js
import React, { Component } from 'react'
import Input from '../Input'
import { Form } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import './Regis.scss'
import 'whatwg-fetch'
const API = 'http://localhost:8000/api/v1/member/detail/'
export default class RegisForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username:'',
      password:'',
      confirm_password:'',
      first_name:'',
      last_name:'',
      email:''
    };
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  regis(e){
    e.preventDefault()
    var data = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name
    }

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

  render() {
    return (
      <div className="text-center">
        <form className="RegisForm">
          <div className="inputContainerID row toInline">
            <p>Username</p>
            &nbsp;&nbsp;
            <input id="username" type="text" name="username"  onChange={this.handleChange.bind(this)} required/>
          </div>
          <br/>
          <div className="inputContainerPass row toInline">
            <p>Password</p>
            &nbsp;&nbsp;
            <input id="password" type="password" name="password" onChange={this.handleChange.bind(this)} required/>
          </div>
          <br/>
          <div className="inputContainerConfirmPass row toInline">
            <p>Confirm Password</p>
            &nbsp;&nbsp;
            <input id="confirm_password" type="password" name="confirm_password" onChange={this.handleChange.bind(this)} required/>
          </div>
          <br/>
          <div className="inputContainerFirstName row toInline">
            <p>Firstname</p>
            &nbsp;&nbsp;
            <input id="firstname" type="text" name="first_name" onChange={this.handleChange.bind(this)} required/>
          </div>
          <br/>
          <div className="inputContainerLastName row toInline">
            <p>Lastname</p>
            &nbsp;&nbsp;
            <input id="lastname" type="text" name="last_name" onChange={this.handleChange.bind(this)} required/>
          </div>
          <br/>
          <div className="inputContainerEmail row toInline">
            <p>Email</p>
            &nbsp;&nbsp;
            <input id="email" type="text" name="email" onChange={this.handleChange.bind(this)} required/>
          </div>
          <br/>
          <br/>
          <div className="ButtonRegisContainer">
            <div className="regisBtn">
              <input id="btnSubmit" type="submit" className="btn btn-info" onClick={this.regis.bind(this)} />
              {/* <button className="btn btn-info" onClick={this.regis.bind(this)} >
                Sign up <i className="fa fa-fw fa-chevron-right"></i>
            </button> */}
            </div>
          </div>
      </form>
    </div>
  )
}
}

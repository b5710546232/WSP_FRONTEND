// ui/components/Register/RegisterForm.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { FormGroup ,
  Form,
  FormControl,
  ControlLabel,
  HelpBlock } from 'react-bootstrap'
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
      email:'',
      emailError: false,
      userError:''
    };
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  validateUser(){
    this.setState(this.state.userError:'error')
  }

  regis(e){
    e.preventDefault()
    console.log(ReactDOM.findDOMNode(this.refs.input_username).value)
    // console.log(this.state.userError)
    var data = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name
    }
    if(true) {
      this.setState({
        emailError : true
      });
    }else {
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

    render() {
      return (
        <div className="text-center">
          <form className="RegisForm">
            <div className="inputContainerID row toInline">
              <FormGroup >
                <ControlLabel>Input username</ControlLabel>
              <FormControl
                type="text"
                // value={this.state.value}
                placeholder="Enter Username"
                ref = "input_username"
              />
            {/* <HelpBlock>Help text with validation state.</HelpBlock> */}
            </FormGroup>


              </div>
            <br/>
            <div className="inputContainerPass row toInline">
              {/* <p>Password</p> */}
              {/* &nbsp;&nbsp; */}
              {/* <input id="password" type="password" name="password" onChange={this.handleChange.bind(this)} required/> */}
              <div style={{width: 100}}>
                <label htmlFor="">Password</label>
              </div>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter Password"
                ref = "text-password"
              />
            </div>
            <br/>
            <div className="inputContainerConfirmPass row toInline">
              {/* <p>Confirm Password</p> */}
              {/* &nbsp;&nbsp; */}
              {/* <input id="confirm_password" type="password" name="confirm_password" onChange={this.handleChange.bind(this)} required/> */}
              <div style={{width: 100}}>
                <label htmlFor="">Confirm password</label>
                <br/>
              </div>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter Confirm Password"
                ref = "text-confirm-password"
                />
            </div>
            <br/>
            <div className="inputContainerFirstName row toInline">
              {/* <p>Firstname</p> */}
              {/* &nbsp;&nbsp; */}
              {/* <input id="firstname" type="text" name="first_name" onChange={this.handleChange.bind(this)} required/> */}
              <div style={{width: 100}}>
                <label htmlFor="">Firstname</label>
                <br/>
              </div>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter Firstname"
                ref = "text-firstname"
                />
            </div>
            <br/>
            <div className="inputContainerLastName row toInline">
              {/* <p>Lastname</p> */}
              {/* &nbsp;&nbsp; */}
              {/* <input id="lastname" type="text" name="last_name" onChange={this.handleChange.bind(this)} required/> */}
              <div style={{width: 100}}>
                <label htmlFor="">Lastname</label>
                <br/>
              </div>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter LastName"
                ref = "text-lastname"
                />
            </div>
            <br/>
            <div className="inputContainerEmail row toInline">
              {/* <p>Email</p> */}
              {/* &nbsp;&nbsp; */}
              {/* <input id="email" type="text" name="email" onChange={this.handleChange.bind(this)} required/> */}
              <div style={{width: 100}}>
                <label htmlFor="">Email</label>
                <br/>
              </div>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter Email"
                ref = "text-email"
                />
            </div>
            <br/>
            <br/>
            <div className="ButtonRegisContainer">
              <div className="regisBtn">
                <input id="btnSubmit" type="submit" value = "Sign up" className="btn btn-info" onClick={this.regis.bind(this)} />
              </div>
            </div>
          </form>
        </div>
      )
    }
  }

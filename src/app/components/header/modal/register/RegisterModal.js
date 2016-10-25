import React, { Component } from 'react'
import {Modal,Button,Input,Row} from 'react-materialize'

export default class RegisterModal extends Component {

  onRegister(e){
    e.preventDefault()
    let username = this.refs.form.username.value
    let password = this.refs.form.password.value
    let confirm_password = this.refs.form.confirm_password.value
    let email = this.refs.form.username.value
    let firstname = this.refs.form.firstname.value
    let lastname = this.refs.form.lastname.value

    let data = {
      username: username,
      password: password,
      confirm_password: confirm_password,
      email: email,
      firstname: firstname,
      lastname: lastname
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
          onClose()
        }).catch(function(error) {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <Modal
        header='Register'
        trigger={
          <Button waves='light' className="space-button">Register</Button>
        }>
        <form action="" ref="form">
          <Row className="center">
            <Input name="username" s={12} label="Username" ref="username"/>
            <Input name="password" type="password" label="Password" s={12} ref="password"/>
            <Input name="password" type="password" label="Confirm Password" s={12} ref="confirm_password"/>
            <Input s={6} name="firstname" label="First Name" ref="firstname"/>
            <Input s={6} name="lastname" label="Last Name" ref="lastname"/>
            <Input name="email" type="email" label="Email" s={12} ref="email"/>
          </Row>
          <Row className="center">
            <Button waves="light" className="space-button" onClick={ (e)=>this.onRegister(e) }>Register</Button>
            <Button waves="light" className="space-button">Reset</Button>
          </Row>
        </form>
      </Modal>
    )
  }
}

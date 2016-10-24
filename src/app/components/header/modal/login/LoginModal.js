import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Modal,Button,Input,Row} from 'react-materialize'
import AuthedAction from '../../../../actions/AuthedAction'
export default class LoginModal extends Component {
  onLogin(e){
    e.preventDefault()
    let username = ReactDOM.findDOMNode(this.refs.username).value
    let password = ReactDOM.findDOMNode(this.refs.password).value
    console.log(ReactDOM.findDOMNode(this.refs.username).value);

    let data = {
      username: username,
      password: password
    }
    // this.props.login(data)

    ReactDOM.findDOMNode(this.refs.password).value = ''
    ReactDOM.findDOMNode(this.refs.password).value.value = ''
  }
  render() {
    return (
      <Modal
        header='Login'
        trigger={
          <Button waves='light' className="space-button">Login</Button>
        }>
        <form>
          <Row className="center">
            <Input name="username" s={12} label="Username"
              ref = "username"
               />
            <Input name="password" type="password" label="password" s={12}
              ref = "password"
               />
            <Button waves="light" type="submit" onClick={(e)=>this.onLogin(e)}>Login</Button>
          </Row>
        </form>
      </Modal>
    )
  }
}

import React, { Component } from 'react'
import {Modal,Button,Input,Row} from 'react-materialize'

export default class RegisterModal extends Component {
  render() {
    return (
      <Modal
        header='Register'
        trigger={
          <Button waves='light' className="space-button">Register</Button>
        }>
        <form>
          <Row className="center">
            <Input name="username" s={12} label="Username" />
            <Input name="password" type="password" label="password" s={12} />
            <Input name="password" type="password" label="password" s={12} />
            <Input s={6} name="firstname" label="First Name" />
            <Input s={6} name="lastname" label="Last Name" />
            <Input name="email" type="email" label="Email" s={12} />
          </Row>
          <Row className="center">
            <Button waves="light" className="space-button">Register</Button><Button waves="light" className="space-button">Reset</Button>
          </Row>
        </form>
      </Modal>
    )
  }
}

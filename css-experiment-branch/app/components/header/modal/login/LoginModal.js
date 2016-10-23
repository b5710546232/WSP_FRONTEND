import React, { Component } from 'react'
import {Modal,Button,Input,Row} from 'react-materialize'
export default class LoginModal extends Component {
  render() {
    return (
      <Modal
        header='Login'
        trigger={
          <Button waves='light' className="space-button">Login</Button>
        }>
        <form>
          <Row className="center">
            <Input name="username" s={12} label="Username" />
            <Input name="password" type="password" label="password" s={12} />
            <Button waves="light">Login</Button>
          </Row>
        </form>
      </Modal>
    )
  }
}

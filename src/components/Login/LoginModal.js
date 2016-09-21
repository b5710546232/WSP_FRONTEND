// ui/components/Login/LoginModal.js
import React,{ Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Login from './LoginForm.js'

export default class LoginModal extends Component{

  constructor(){
    super();
    this.state =  { showModal: false };

  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }


  render(){
    return(
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.open.bind(this)}>
          Login
        </Button>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='text-center'>
              <Login />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

// ui/components/Login/LoginModal.js
import React,{ Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Login from './LoginForm.js'
import './LoginModal.scss'

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
        <button className="btn btn-default  btn-signup" onClick={this.open.bind(this)}>
          Login
        </button>
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

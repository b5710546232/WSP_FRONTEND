// ui/components/Register/RegisterModal.js
import React,{ Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Regis from './RegisterForm.js'

export default class RegisterModal extends Component{

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
        <Button className="waves-effect waves-light btn-large" bsStyle="danger"
          bsSize="large"
          onClick={this.open.bind(this)}>
          Sign up
        </Button>
        <Modal show={this.state.showModal}
          onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Sign up</Modal.Title>
          </Modal.Header>
          <div className='text-center'>
            <Regis />
          </div>
          <Modal.Body>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

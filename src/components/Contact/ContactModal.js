// ui/components/Contact/ContactModal.js
import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import styles from './styles.scss'
import Cont from './ContactForm.js'
export default class ContactModal extends Component {

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

  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Contact us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center'>
            <Login />
        </Modal.Body>
        </Modal>
      </div>
    )
  }
}

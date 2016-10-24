import React, { Component } from 'react'
import {Modal,Button} from 'react-materialize'
export default class OrderModal extends Component {
  render() {
    return (
      <Modal
        header='Order'
        trigger={
          <Button waves='light' className="space-button">Order</Button>
        }>

      </Modal>
    )
  }
}

import React, { Component } from 'react'

export default class PaymentModal extends Component {
  render() {
    return (
      <Modal
        header='Payment'
        trigger={
          <Button waves='light' className="space-button">Payment</Button>
        }>

      </Modal>
    )
  }
}

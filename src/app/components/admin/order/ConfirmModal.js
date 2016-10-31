import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Modal,Input,Button,Row} from 'react-materialize'

class ConfirmModal extends Component {

  onConfirm(e){

  }
  onUnconfirm(e){
    
  }
  render(){
    return (
      <Modal
        header={this.props.del?
          <span>Unconfirm Payment</span>:<span>Confirm Payment</span>
        }
        trigger={this.props.trigger_choose}
        >
        <Row>
          <div className="center">{this.props.del?
              <div>Do you sure to unconfirm the payment of Order {this.props.select_order.id} ?</div>:
                <div>Do you sure to confirm the payment of Order {this.props.select_order.id} ?</div>
              }</div>
        </Row>
        <Row>
          <div className="center">{this.props.del?
              <Button>Unconfirm</Button>:
                <Button>Confirm</Button>
              }</div>
        </Row>
      </Modal>
    )
  }
}
export default ConfirmModal

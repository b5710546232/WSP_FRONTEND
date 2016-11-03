import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Modal,Input,Button,Row} from 'react-materialize'
import {confirmPayment,unconfirmPayment} from '../../../actions/AdminAction'

class ConfirmModal extends Component {

  onConfirm(e){
    e.preventDefault()
    this.props.confirmPayment(this.props.select_order.id,localStorage.token)
    $('#confirm-modal'+this.props.select_order.id).closeModal();
  }
  onUnconfirm(e){
    e.preventDefault()
    this.props.unconfirmPayment(this.props.select_order.id,localStorage.token)
    $('#confirm-modal'+this.props.select_order.id).closeModal();
  }
  render(){
    return (
      <Modal
        header={this.props.del?
          <span>Unconfirm Payment</span>:<span>Confirm Payment</span>
        }
        id = {'confirm-modal'+this.props.select_order.id}
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
              <Button waves="light" onClick={(e)=>this.onUnconfirm(e)}>Unconfirm</Button>:
                <Button waves="light" onClick={(e)=>this.onConfirm(e)}>Confirm</Button>
              }</div>
        </Row>
      </Modal>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    confirmPayment: (id,token)=>(
      dispatch(confirmPayment(id,token))
    ),
    unconfirmPayment: (id,token)=>(
      dispatch(unconfirmPayment(id,token))
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ConfirmModal)

import React, { Component } from 'react'
import {Modal,Button,Table} from 'react-materialize'
import CartInfo from './CartInfo'
export default class CartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {cart_info:true,payment_info:false,summarize:false};
    this.onPay = this.toPayment.bind(this)
  }
  toPayment(){
    this.setState({cart_info:false,payment_info:true,summarize:false})
  }
  toCartInfo(){
    this.setState({cart_info:true,payment_info:false,summarize:false})
  }
  render() {
    return (
      <Modal
        header="Cart"
        trigger={
          <Button waves='light'>Cart 1</Button>
        }
        >
        {this.state.cart_info?
          <CartInfo
            onPay={this.onPay}
            />:<div></div>
        }

      </Modal>
    )
  }
}

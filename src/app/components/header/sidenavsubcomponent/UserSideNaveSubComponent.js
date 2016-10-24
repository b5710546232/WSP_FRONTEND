import React, { Component } from 'react'
import { Link } from 'react-router'
import LoginModal from '../modal/login/LoginModal'
import PaymentModal from '../modal/payment/PaymentModal'
import PostalModal from '../modal/postal/PostalModal'
import CartModal from '../modal/cart/CartModal'
import MemberModal from '../modal/member/MemberModal'
export default class GuestNavSubComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <li className={this.props.position}>
            <MemberModal/>
          </li>
          {/* {this.props.is_admin? <Button>Admin</Button>?<div></div>} */}
          <li className={this.props.position}><PaymentModal/></li>
          <li className={this.props.position}><PostalModal/></li>
          <li className={this.props.position}><CartModal/></li>
        </div>
      </div>
    )
  }
}

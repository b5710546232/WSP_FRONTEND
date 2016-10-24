import React, { Component } from 'react'
import { Link } from 'react-router'
import OrderModal from '../modal/order/OrderModal'
import CartModal from '../modal/cart/CartModal'
import MemberModal from '../modal/member/MemberModal'
import {Button} from 'react-materialize'
export default class UserNavSubComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <li className={this.props.position}><CartModal/></li>
          <li className={this.props.position}><OrderModal/></li>
          <li className={this.props.position}>
            <MemberModal/>
          </li>
        </div>
      </div>
    )
  }
}

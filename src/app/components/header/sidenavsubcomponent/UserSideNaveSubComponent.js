import React, { Component } from 'react'
import { Link } from 'react-router'
import OrderModal from '../modal/order/OrderModal'
import CartModal from '../modal/cart/CartModal'
import MemberModal from '../modal/member/MemberModal'

export default class GuestNavSubComponent extends Component {
  hideNav(){
    $('.button-collapse').sideNav('hide');
  }
  render() {
    return (
      <div>
        <div>
          <li className={this.props.position}>
            <MemberModal onClick={()=>this.hideNav()}/>
          </li>
          <li className={this.props.position}><OrderModal onClick={()=>this.hideNav()}/></li>
          <li className={this.props.position}><CartModal onClick={()=>this.hideNav()}/></li>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router'
import LoginModal from '../modal/login/LoginModal'
import RegisterModal from '../modal/register/RegisterModal'
import RegisterModal from '../modal/register/RegisterModal'
import RegisterModal from '../modal/register/RegisterModal'

export default class UserNavSubComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <li className={this.props.position}><MemberModal/></li>
          {this.props.is_admin}
          <li className={this.props.position}><PaymentModal/></li>
          <li className={this.props.position}><PostalModal/></li>
          <li className={this.props.position}><CartModal/></li>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router'
import LoginModal from '../modal/login/LoginModal'
import PaymentModal from '../modal/register/RegisterModal'
import PostalModal from '../modal/register/RegisterModal'
import CartModal from '../modal/register/RegisterModal'
import {Button} from 'react-materialize'
export default class UserNavSubComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <li className={this.props.position}>
            <MemberModal
              user={this.props.authed.user}
              />
          </li>
          {this.props.is_admin? <Button>Admin</Button>?<div></div>}
          <li className={this.props.position}><PaymentModal/></li>
          <li className={this.props.position}><PostalModal/></li>
          <li className={this.props.position}><CartModal/></li>
        </div>
      </div>
    )
  }
}

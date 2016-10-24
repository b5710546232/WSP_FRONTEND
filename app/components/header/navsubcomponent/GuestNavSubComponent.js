import React, { Component } from 'react'
import { Link } from 'react-router'
import LoginModal from '../modal/login/LoginModal'
import RegisterModal from '../modal/register/RegisterModal'
export default class GuestNavSubComponent extends Component {
  render() {
    return (
      <div>
        <li className={this.props.position}><RegisterModal/></li>
        <li className={this.props.position}><LoginModal/></li>
      </div>
    )
  }
}

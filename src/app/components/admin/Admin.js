import React, { Component } from 'react'
export default class Admin extends Component {
  render() {
    return (
      <div>
        {this.props.user.is_admin
          <div>OK you are admin</div>:
          <div>Permission Denied</div>
        }
      </div>
    )
  }
}

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Modal} from 'react-materialize'
class MemberModal extends Component {
  render() {
    return (
      <Modal
        header='Modal Header'
        trigger={
          <span>Welcome, {this.props.authed.userdata.first_name} {this.props.authed.userdata.last_name}</span>
        }
        >
        <div class="collection">
          <a href="#!" class="collection-item">Alvin</a>
          <a href="#!" class="collection-item active">Alvin</a>
          <a href="#!" class="collection-item">Alvin</a>
          <a href="#!" class="collection-item">Alvin</a>
        </div>
      </Modal>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(MemberModal)

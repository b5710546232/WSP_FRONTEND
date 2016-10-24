import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Modal} from 'react-materialize'
class MemberModal extends Component {
  render() {
    var margin = {
      paddingRight: "15px"
    }
    return (
      <Modal
        header='Modal Header'
        trigger={
          <span style={margin}>Welcome, {this.props.authed.userdata.username}</span>
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

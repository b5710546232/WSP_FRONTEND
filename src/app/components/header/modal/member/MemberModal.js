import React, { Component } from 'react'
import {connect} from 'react-redux'
import {logout} from '../../../../actions/AuthedAction'
import {Modal,Button} from 'react-materialize'
class MemberModal extends Component {
  onLogout(){
    this.props.onLogout()
  }
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
        <div className="collection">
          <a href="#!" className="collection-item">Alvin</a>
          <a href="#!" className="collection-item active">Alvin</a>
          <a href="#!" className="collection-item">Alvin</a>
          <a href="#!" className="collection-item">Alvin</a>
        </div>
        <div className="row center">
          <Button waves="light" className="modal-close" onClick={
             (e)=>this.onLogout()
           }>Logout</Button>
         <Button waves="light" >Admin</Button>
        </div>
      </Modal>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(logout())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MemberModal)

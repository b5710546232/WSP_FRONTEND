import React, { Component } from 'react'
import {connect} from 'react-redux'
import {logout} from '../../../../actions/AuthedAction'
import {Modal,Button} from 'react-materialize'
import MemberInfo from './MemberInfo'
import ChangePasswordPanel from './ChangePasswordPanel'
import AddressInfo from './AddressInfo'
class MemberModal extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }
  onLogout(){
    this.props.onLogout()
  }
  render() {
    var margin = {
      paddingRight: "15px"
    }
    return (
      <Modal
        header='User Control Panel'
        trigger={
          <span style={margin}>Welcome, {this.props.authed.userdata.username}</span>
        }
        >
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header active">User Info</div>
            <div className="collapsible-body"><MemberInfo
              username={this.props.authed.userdata.username}
              first_name={this.props.authed.userdata.first_name}
              last_name={this.props.authed.userdata.last_name}
              email={this.props.authed.userdata.email}
              /></div>
          </li>
          <li>
            <div className="collapsible-header">Change Password</div>
            <div className="collapsible-body"><ChangePasswordPanel/></div>
          </li>
          <li>
            <div className="collapsible-header">Manage Address</div>
            <div className="collapsible-body"><AddressInfo/></div>
          </li>
        </ul>
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

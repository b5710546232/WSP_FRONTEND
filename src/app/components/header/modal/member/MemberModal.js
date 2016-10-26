import React, { Component } from 'react'
import {connect} from 'react-redux'
import {logout,loadUserdata,check_admin} from '../../../../actions/UserAction'
import {Modal,Button} from 'react-materialize'
import MemberInfo from './MemberInfo'
import ChangePasswordPanel from './ChangePasswordPanel'
import AddressInfo from './AddressInfo'
import {Link} from 'react-router'
class MemberModal extends Component {
  constructor(props){
    super(props)

      this.userdata = {
        username:"",
        first_name:"",
        last_name:"",
        email:""
      }
      this.handleChange = this.onChange.bind(this)
  }

  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
    this.props.loadUserdata(localStorage.token)
    this.props.check_admin(localStorage.token)
    console.log('user',this.userdata);

  }
  shouldComponentUpdate(nextProps){
    return this.props.user !== nextProps.user
  }
  onChange(){
    this.props.loadUserdata(localStorage.token)
  }
  onLogout(){
    this.props.onLogout()
  }
  render() {
    var margin = {
      paddingRight: "15px",
      paddingLeft:"15px"
    }
    this.userdata = this.props.user.userdata===null?this.userdata:this.props.user.userdata
    return (
      <Modal
        header='User Control Panel'
        trigger={
          <span className="waves-effect waves-light" style={margin}>Welcome, {this.userdata.username}</span>
        }
        >
        <ul className="collapsible row" data-collapsible="accordion">
          <li>
            <div className="collapsible-header active">User Info</div>
            <div className="collapsible-body"><MemberInfo
              username={this.userdata.username}
              first_name={this.userdata.first_name}
              last_name={this.userdata.last_name}
              email={this.userdata.email}
              onChange = {this.handleChange}
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
         {this.props.user.is_admin? <Link className="waves-effect waves-light btn" to={{ pathname:'/admin' }}>Admin</Link>:<div></div>}
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
    },
    loadUserdata:(token)=>{
      dispatch(loadUserdata(token))
    },
    check_admin: (token)=>{
      dispatch(check_admin(token))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MemberModal)

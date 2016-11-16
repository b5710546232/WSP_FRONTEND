import React, { Component } from 'react'
import {connect} from 'react-redux'
import {logout,loadUserdata,check_admin,onEditPassword} from '../../../../actions/UserAction'
import {Button} from 'react-materialize'
import {Modal} from '../../../../../util/react-materialize-yr'
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

  }
  shouldComponentUpdate(nextProps){
    return this.props.user !== nextProps.user
  }
  onChange(){
    this.props.loadUserdata(localStorage.token)
  }
  onLogout(){
    this.props.onLogout()
    $('.button-collapse').sideNav('hide');
    Materialize.toast('Goodbye :D', 4000,'light-blue')
  }
  onEditPasswordSelect(){
    this.props.onEditPassword()
  }
  hideSideNav(e){
    e.preventDefault()
    $('.button-collapse').sideNav('hide');
  }
  render() {
    var margin = {
      paddingRight: "15px",
      paddingLeft:"15px"
    }
    this.userdata = this.props.user.userdata===null?this.userdata:this.props.user.userdata
    return (
      <Modal
        id="user-control-panel"
        header='User Control Panel'
        trigger={
          <span className="waves-effect waves-light" style={margin}>Welcome, {this.userdata.username}</span>
        }
      >
        <div>
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
              <div className="collapsible-header" onClick={(e)=>this.onEditPasswordSelect(e)} >Change Password</div>
              { !this.props.user.change_password_success ?
                <div className="collapsible-body"><ChangePasswordPanel/></div>
                : <div></div>
              }
            </li>
            <li>
              <div className="collapsible-header">Manage Address</div>
              <div className="collapsible-body"><AddressInfo/></div>
            </li>
          </ul>
          <br/>
          <div className="row center">
            <Button waves="light" className="modal-close" onClick={
              (e)=>this.onLogout()
            }>Logout</Button>&nbsp;
            {this.props.user.is_admin? <Link className="waves-effect waves-light btn modal-close"  to={{ pathname:'/admin' }}>Admin</Link>:<div></div>}
          </div>
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
    },
    onEditPassword: () =>{
      dispatch(onEditPassword())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MemberModal)

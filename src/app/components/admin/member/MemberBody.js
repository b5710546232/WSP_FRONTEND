import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
import {deactiveUser,reactiveUser,assignStaff,fireStaff} from '../../../actions/AdminAction'
import {loadValidator,resetValidator} from '../../../actions/ValidatorAction'

class MemberBody extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
    this.props.loadValidator()
  }
  shouldComponentUpdate(nextProps){
    return this.props.admin.user !== nextProps
  }
  componentDidUpdate(){
    if (this.props.validator.onDeactiveUser){
      if (this.props.validator.is_deactive_user_success){
        Materialize.toast('Deactive user!', 4000,'light-blue')
        this.props.resetValidator()
      }else {
        Materialize.toast('Deactive user fail!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
    if (this.props.validator.onReactiveUser){
      if (this.props.validator.is_reactive_user_success){
        Materialize.toast('Reactive user!', 4000,'light-blue')
        this.props.resetValidator()
      }else {
        Materialize.toast('Reactive user fail!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
    if (this.props.validator.onFireStaff){
      if (this.props.validator.is_fire_staff_success){
        Materialize.toast('Fire user staff success!', 4000,'light-blue')
        this.props.resetValidator()
      }else {
        Materialize.toast('Fire user staff fail!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
    if (this.props.validator.onAssignStaff){
      if (this.props.validator.is_assign_staff_success){
        Materialize.toast('Assign user success!', 4000,'light-blue')
        this.props.resetValidator()
      }else {
        Materialize.toast('Assign user fail!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }
  }
  deactiveUser(e,id){
    e.preventDefault()
    this.props.deactiveUser(id,localStorage.token)
  }
  reactiveUser(e,id){
    e.preventDefault()
    this.props.reactiveUser(id,localStorage.token)
  }
  assignStaff(e,id){
    e.preventDefault()
    this.props.assignStaff(id,localStorage.token)
  }
  fireStaff(e,id){
    e.preventDefault()
    this.props.fireStaff(id,localStorage.token)
  }
  render() {
    return(
      <li>
        <div className="collapsible-header">User</div>
        <div className="collapsible-body white">
          <table className="table-responsive white">
            <thead>
              <tr>
                  <th data-field="id">ID</th>
                  <th data-field="username">Username</th>
                  <th data-field="first_name">Firstname</th>
                  <th data-field="last_name">Lastname</th>
                  <th data-field="email">Email</th>
                  <th data-field="is_staff">Staff</th>
                  <th data-field="is_active">Active</th>
              </tr>
            </thead>
            <tbody>
              {this.props.admin.user.map(
                (user)=>(
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.is_staff ? <i className="material-icons done-icon" onClick={(e)=>this.fireStaff(e,user.id)}>done</i> : <i className="material-icons clear-icon"  onClick={(e)=>this.assignStaff(e,user.id)}>clear</i>}</td>
                      <td>{user.is_active ? <i className="material-icons done-icon"  onClick={(e)=>this.deactiveUser(e,user.id)}>done</i> : <i className="material-icons clear-icon" onClick={(e)=>this.reactiveUser(e,user.id)}>clear</i>}</td>
                    </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </li>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    deactiveUser: (id,token)=>(
      dispatch(deactiveUser(id,token))
    ),reactiveUser:(id,token)=>(
      dispatch(reactiveUser(id,token))
    ),assignStaff:(id,token)=>(
      dispatch(assignStaff(id,token))
    ),fireStaff:(id,token)=>(
      dispatch(fireStaff(id,token))
    ),loadValidator:()=>(
      dispatch(loadValidator())
    ),resetValidator:()=>(
      dispatch(resetValidator())
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MemberBody)

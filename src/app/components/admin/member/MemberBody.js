import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'
class MemberBody extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }
  shouldComponentUpdate(nextProps){
    return this.props.admin.user !== nextProps
  }
  render() {
    return(
      <li>
        <div className="collapsible-header">User</div>
        <div className="collapsible-body white">
          <table className="table-responsive">
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
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.is_staff ? <i className="material-icons done-icon">done</i> : <i className="material-icons clear-icon">clear</i>}</td>
                      <td>{user.is_active ? <i className="material-icons done-icon">done</i> : <i className="material-icons clear-icon">clear</i>}</td>
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

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MemberBody)

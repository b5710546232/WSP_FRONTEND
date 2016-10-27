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
    return this.props.products !== nextProps
  }
  render() {
    return(
      <li>
        <div className="collapsible-header">User</div>
        <div className="collapsible-body white">
          <table className="table-responsive">
            <thead>
              <tr>
                  <th data-field="id">Username</th>
                  <th data-field="first_name">Firstname</th>
                  <th data-field="last_name">Lastname</th>
                  <th data-field="email">Email</th>
                  <th data-field="is_staff">Staff</th>
                  <th data-field="is_active">Active</th>
                  {/* <th data-field="add"><MethodEditForm add={true}/></th> */}
              </tr>
            </thead>
            <tbody>
              {this.props.admin.user.map(
                (user)=>(
                    <tr>
                      <td>{user.username}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.is_staff ? <i className="material-icons done-icon">done</i> : <i className="material-icons clear-icon">clear</i>}</td>
                      <td>{user.is_active ? <i className="material-icons done-icon">done</i> : <i className="material-icons clear-icon">clear</i>}</td>
                      {/* <td>{method.is_active? <a>Active</a>:<a claasName="red-text">Disable</a>}</td>
                      <td><MethodEditForm select_method={method}/></td> */}
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

import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../../assets/scss/admin.scss'

class ProductBody extends Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }

  shouldComponentUpdate(nextProps){
    console.log(this.props.admin.category,"list category");
    console.log(this.props.admin.product,"list product");
    return this.props.products !== nextProps
  }

  render() {
    return(
      <li>
        <div className="collapsible-header">Product</div>
        <div className="collapsible-body">

        <ul className="collapsible popout"  data-collapsible="accordion">
        {this.props.admin.category.map(
          (category)=>(
            <li>
              <div className="collapsible-header">{category.name}</div>
            </li>
          )
        )}
        </ul>
        {/* <table className="table-responsive">
          <thead>
            <tr>
                <th data-field="id">Username</th>
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
        </table> */}
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
export default connect(mapStateToProps,mapDispatchToProps)(ProductBody)

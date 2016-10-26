import React, { Component } from 'react'
import {check_admin} from '../../actions/UserAction'
import {connect} from 'react-redux'
class Admin extends Component {
  componentDidMount(){
    this.props.check_admin(localStorage.token)
  }
  render() {
    return (
      <div>
        {this.props.user.is_admin?
          <div>OK you are admin</div>:
          <div>Permission Denied</div>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    check_admin: (token)=>{
      dispatch(check_admin(token))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Admin)

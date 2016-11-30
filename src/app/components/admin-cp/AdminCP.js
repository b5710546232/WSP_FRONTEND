import React, { Component } from 'react'
import {check_admin} from '../../actions/UserAction'
import {loadUser,loadOrder,loadAddress,loadProduct,loadItemLine,loadCategory,loadMethod} from '../../actions/AdminAction'
import {loadUserdata} from '../../actions/UserAction'
import {connect} from 'react-redux'
import SideNav from './SideNav'
class AdminCP extends Component {
  componentDidMount(){
    this.props.loadUserdata(localStorage.token)
    this.props.loadOrder(localStorage.token)
    this.props.loadUser(localStorage.token)
    this.props.loadAddress(localStorage.token)
    this.props.loadProduct(localStorage.token)
    this.props.loadItemLine(localStorage.token)
    this.props.loadCategory(localStorage.token)
    this.props.loadMethod(localStorage.token)
  }

  render() {

    return (
      <div >
        <SideNav/>
        <div className="row"></div>
        <div className="row">
          <div className="col s12 m12 l3"></div>
          <div className="col s12 m12 l9">
            <div className="container">
              aaadsadsadsadsadsadsadsadassssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </div>
          </div>
        </div>

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
    },
    loadUser: (token)=>{
      dispatch(loadUser(token))
    },
    loadOrder: (token)=>{
      dispatch(loadOrder(token))
    },
    loadAddress: (token)=>{
      dispatch(loadAddress(token))
    },
    loadProduct: (token)=>{
      dispatch(loadProduct(token))
    },
    loadItemLine: (token)=>{
      dispatch(loadItemLine(token))
    },
    loadCategory: (token)=>{
      dispatch(loadCategory(token))
    },
    loadMethod: (token)=>{
      dispatch(loadMethod(token))
    },
    loadUserdata: (token)=>{
      dispatch(loadUserdata(token))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AdminCP)

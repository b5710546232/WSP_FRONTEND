import React, { Component } from 'react'
import {check_admin} from '../../actions/UserAction'
import {loadUser,loadOrder,loadAddress,loadProduct,loadItemLine,loadCategory,loadMethod} from '../../actions/AdminAction'
import {connect} from 'react-redux'
import '../../../assets/scss/store.scss'
import ProductBody from './product/ProductBody'
import OrderBody from './order/OrderBody'
import MethodBody from './method/MethodBody'
import MemberBody from './member/MemberBody'
class Admin extends Component {
  componentDidMount(){
    let token = localStorage.token
    this.props.check_admin(token)
    this.props.loadUser(token)
    this.props.loadOrder(token)
    this.props.loadAddress(token)
    this.props.loadProduct(token)
    this.props.loadItemLine(token)
    this.props.loadCategory(token)
    this.props.loadMethod(token)

  }

  render() {
    var bg = {
      backgroundImage: 'url(src/assets/media/images/3.png)'
    }

    return (
      <div className="store-container" style={bg}>
        <div className="container">
          <div className="row"></div>
          <div className="row">
            {this.props.user.is_admin?
              <ul className="collapsible popout"  data-collapsible="accordion">
                <MemberBody />
                <ProductBody />
                <MethodBody />
                <OrderBody />
               </ul>:
              <h1 className="white-text thin">Permission Denied</h1>
            }
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
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Admin)

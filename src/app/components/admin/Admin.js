import React, { Component } from 'react'
import {check_admin} from '../../actions/UserAction'
import {loadUser,loadOrder,loadAddress,loadProduct,loadItemLine,loadCategory,loadMethod} from '../../actions/AdminAction'
import {connect} from 'react-redux'
import '../../../assets/scss/store.scss'
import CategoryBody from './product/CategoryBody'
import OrderBody from './order/OrderBody'
import MethodBody from './method/MethodBody'
import MemberBody from './member/MemberBody'
import StatisticBody from './statistic/StatisticBody'
import DesignBody from './design/DesignBody'
class Admin extends Component {
  componentDidMount(){
    this.props.check_admin(localStorage.token)
    this.props.loadOrder(localStorage.token)
    this.props.loadUser(localStorage.token)
    this.props.loadAddress(localStorage.token)
    this.props.loadProduct(localStorage.token)
    this.props.loadItemLine(localStorage.token)
    this.props.loadCategory(localStorage.token)
    this.props.loadMethod(localStorage.token)
  }

  render() {
    var bg = {
      backgroundImage: 'url(src/assets/media/images/1.jpg)',
      minHeight:"600px"
    }

    return (
      <div className="store-container" style={bg}>
        <div className="container">
          <div className="row"></div>
          <div className="row">
            {this.props.user.is_admin?
              <ul className="collapsible popout"  data-collapsible="accordion">
                <MemberBody />
                <CategoryBody />
                <MethodBody />
                <OrderBody />
                <DesignBody />
                <StatisticBody/>
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
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Admin)

import React, { Component } from 'react'
import {connect} from 'react-redux'
// import '../../../../assets/scss/admin.scss'
import OrderItem from './OrderItem'
class OrderList extends Component {
  constructor(props){
    super(props)
  }

  getUserbyID(id){
    let usertemp = {id:'',first_name:'',last_name:'',email:'',username:'',is_staff:false,is_active:false}
    this.props.admin.user.forEach((user)=>{
      if(user.id === id){
        usertemp = user
      }
    })
    return usertemp
  }

  render() {
    let orderList =  this.props.orderList
    return(
      <ul className="collapsible popout"  data-collapsible="accordion">
            {orderList.map(
              (order)=>(
                <OrderItem order={order} userorder={this.getUserbyID(order.user)} key={order.id}/>
              )
            )}
      </ul>
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
export default connect(mapStateToProps,mapDispatchToProps)(OrderList)

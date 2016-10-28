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

  getAddressbyID(id){
    let addresstemp = {address_number:'',country:'',distinct:'',id:'',username:'',province:'',is_active:false,road:'',sub_distinct:'',user:'',village:'',zipcode:''}
    this.props.admin.address.forEach((address)=>{
      if(address.user === id)
      addresstemp = address
    })
    return addresstemp
  }

  getPaymentbyID(id){
    let paymenttemp = {id:'',country:'',type:'',id:'',name:'',is_active:false}
    this.props.admin.method.forEach((payment)=>{
      if(payment.id === id)
      paymenttemp = payment
    })
    return paymenttemp
  }
  render() {
    return(
      <ul className="collapsible popout"  data-collapsible="accordion">
            {this.props.admin.order.map(
              (order)=>(
                <OrderItem order={order} userorder={this.getUserbyID(order.user)}/>
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

import React, { Component } from 'react'
import {connect} from 'react-redux'
// import '../../../../assets/scss/admin.scss'

class OrderList extends Component {
  constructor(props){
    super(props)
  }

  getUserbyID(id){
    let usertemp = {id:'',first_name:'',last_name:'',email:'',username:'',is_staff:false,is_active:false}
    this.props.admin.user.forEach((user)=>{
      if(user.id === id)
      usertemp = user
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
      <li>
        <div className="collapsible-header">
        <table className="table-responsive">
          <thead>
            <tr>
                <th data-field="name">ID</th>
                <th data-field="name">Date</th>
                <th data-field="description">Firstname</th>
                <th data-field="Price">Lastname</th>
                <th data-field="is_active">Payment</th>
                {/* <th data-field="is_active">Address</th>
                <th data-field="is_active">Active</th>
                <th data-field="is_active">Paid</th>
                <th data-field="is_active">Shipped</th>
                <th data-field="is_active">Slip</th>
                <th data-field="is_active">Postal</th> */}
            </tr>
          </thead>
          <tbody>
          <ul className="collapsible popout"  data-collapsible="accordion">
              <li>
                <div className="collapsible-header">
                {this.props.admin.order.map(
                  (orders)=>(
                      <tr>
                        <td>{orders.id}</td>
                        <td>{orders.create_date}</td>
                        <td>{this.getUserbyID(orders.user).first_name}</td>
                        <td>{this.getUserbyID(orders.user).last_name}</td>
                        <td>{this.getPaymentbyID(orders.method).name}</td>
                      </tr>
                  )
                )}
                </div>
                <div className="collapsible-body white"></div>
              </li>
          </ul>

          </tbody>
        </table>

        </div>
        <div className="collapsible-body white">
            {/* <OrderItem/> */}
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
export default connect(mapStateToProps,mapDispatchToProps)(OrderList)

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Row,Col,Button,Table} from 'react-materialize'
// import '../../../../assets/scss/admin.scss'

class OrderItem extends Component {
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

  // getAddressbyID(id){
  //   let addresstemp = {address_number:'',country:'',distinct:'',id:'',username:'',province:'',is_active:false,road:'',sub_distinct:'',user:'',village:'',zipcode:''}
  //   this.props.admin.address.forEach((address)=>{
  //     if(address.user === id)
  //     addresstemp = address
  //   })
  //   return addresstemp
  // }

  getPaymentbyID(id){
    let paymenttemp = {id:'',country:'',type:'',id:'',name:'',is_active:false}
    this.props.admin.method.forEach((payment)=>{
      if(payment.id === id)
      paymenttemp = payment
    })
    return paymenttemp
  }
  render() {
    let itemList = this.props.itemlines.filter(itemline=>itemline.order===this.props.order.id)
    let address = this.props.address.find(select_address=>select_address.id===this.props.order.address)
    let price = 0
    let quantity = 0
    itemList.forEach((item)=>{
      quantity+=item.quantity
      price+=this.props.products.find((product)=>parseInt(item.product)==product.id).price*item.quantity
    })
    return(
      <li className="white">
        <div className="collapsible-header">
            OrderID:&nbsp;&nbsp;{this.props.order.id} &nbsp;&nbsp;&nbsp;&nbsp; Name: {this.props.userorder.first_name}&nbsp;&nbsp;{this.props.userorder.last_name}
        </div>
        <div className="collapsible-body white">
          <Row>
            <Col s={12} m={12}>
              Payment Method : {this.getPaymentbyID(this.props.order.user).name}
            </Col>
          </Row>
          <Row>
            <Col s={12} m={1}></Col>
            <Col s={12} m={7}>
              <Row>
                Address :
              </Row>
              <Row>
                {address.address_number} {address.village} {address.road} {address.sub_distinct} {address.distinct} {address.province} {address.country} {address.zipcode}
              </Row>
            </Col>
            <Col s={12} m={4}>
              {this.props.order.is_shipped?
                <div>{this.props.order.postal_track}</div>:<div></div>
              }
            </Col>
          </Row>
          <Row>
            <Col s={12}>
              <Table className="center">
                <tr>
                  <th data-field="id">Product</th>
                  <th data-field="name">Quantity</th>
                  <th data-field="price">Price</th>
                </tr>
                <tbody>
                  {itemList.map(
                    (item)=>(
                      <tr>
                        <td>{this.props.products.find((product)=>parseInt(item.product)==product.id).name}</td>
                        <td>{item.quantity}</td>
                        <td>{(this.props.products.find((product)=>parseInt(item.product)==product.id).price)*item.quantity}</td>
                      </tr>
                    )
                  )
                  }
                  <tr className="bold bold-text">
                    <td>Total</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
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
export default connect(mapStateToProps,mapDispatchToProps)(OrderItem)

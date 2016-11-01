import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Row,Col,Button,Table} from 'react-materialize'
import ConfirmModal from './ConfirmModal'
import PostalTrack from './PostalTrack'
import SlipModal from '../../header/modal/order/SlipModal'
// import '../../../../assets/scss/admin.scss'
class OrderItem extends Component {
  constructor(props){
    super(props)
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
    let paymenttemp = {id:'',country:'',type:'',name:'',is_active:false}
    this.props.admin.method.forEach((payment)=>{
      if(payment.id === id)
      paymenttemp = payment
    })
    return paymenttemp
  }

  render() {
    var margin={
      marginLeft:"10px",
      marginRight:"10px"
    }
    let Listitem = this.props.admin.item_line.filter((itemline)=>parseInt(itemline.order)===this.props.order.id)
    let price = 0
    let quantity = 0
    Listitem.forEach((item)=>{
      quantity+=item.quantity
      price+=this.props.admin.product.find((product)=>parseInt(item.product)===product.id).price*item.quantity
    })
    return(
      <li className="white">
        <div className="collapsible-header">
            <span className="left">OrderID : {this.props.order.id}</span>
            <span className="right">
              {!this.props.order.is_paid?
                <ConfirmModal select_order={this.props.order}
                  trigger_choose={<i className="material-icons clear-icon">clear</i>}
                  />
                :<ConfirmModal select_order={this.props.order} del={true}
                  trigger_choose={<i className="material-icons done-icon">done</i>}
                />
              }
            </span>
        </div>
        <div className="collapsible-body white">
          <div style={margin}>
            <Row>
              <div >
                <Col s={12} m={6}>
                  <span className="boldtext">Name:</span> {this.props.userorder.first_name} {this.props.userorder.last_name}
                </Col>
              </div>
              {this.props.order.transfer_slip!==''?
                <div className="right">
                  <Col s={12} m={6}>
                    <SlipModal read_only={true} order={this.props.order}/>
                  </Col>
                </div>:<div></div>
              }
            </Row>
            <Row>
              <Col s={12} m={6}>
                <span className="boldtext">Payment Method :</span> {this.getPaymentbyID(this.props.order.method).name}
              </Col>
              {this.props.order.is_shipped?
                <div className="right">
                  <Col >
                    <span className="boldtext">Postal Track :</span> {this.props.order.postal_track}
                  </Col>
                </div>:<div></div>
              }
            </Row>
            <Row>
              <Col s={12} m={5}>
                <span className="boldtext">Address :</span>
                {this.getAddressbyID(this.props.order.user).address_number} {this.getAddressbyID(this.props.order.user).village} {this.getAddressbyID(this.props.order.user).road} {this.getAddressbyID(this.props.order.user).sub_distinct} {this.getAddressbyID(this.props.order.user).distinct}
                {this.getAddressbyID(this.props.order.user).province} {this.getAddressbyID(this.props.order.user).country} {this.getAddressbyID(this.props.order.user).zipcode}
              </Col>
              <div className="right">
                {this.props.order.is_paid?
                  <Col>
                    <PostalTrack order={this.props.order}/>
                  </Col>
                  :<div></div>
                }
              </div>
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
                    {Listitem.map(
                      (item)=>(
                        <tr key={item.id}>
                          <td>{this.props.admin.product.find((product)=>parseInt(item.product)==product.id).name}</td>
                          <td>{item.quantity}</td>
                          <td>{(this.props.admin.product.find((product)=>parseInt(item.product)==product.id).price)*item.quantity}</td>
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

import React, { Component } from 'react'
import {Modal,Button,Table,Row,Col} from 'react-materialize'
import {payItemInCart} from '../../../../actions/CartAction'
import {logout} from '../../../../actions/UserAction'
import {loadValidator,resetValidator} from '../../../../actions/ValidatorAction'
import {connect} from 'react-redux'
import CartInfo from './CartInfo'

class Summarize extends Component {

  onConfirm(e){
    e.preventDefault()
    let token = this.props.user.accessToken
    let data = {
      address:this.props.select_address,
      method: this.props.select_method
    }
    this.props.payItemInCart(data,token)
    console.log('confirm',this.props);
  }
  shouldComponentUpdate(nextProps){
    return this.props.cart!==nextProps
  }
  componentDidUpdate(){
    if (this.props.validator.onPay){
      if (this.props.validator.is_pay_success){
        Materialize.toast('Item in cart is paid!', 4000,'light-blue')
        this.props.resetValidator()
        this.props.close()
        $('#cart_modal').closeModal();
      }else {
        Materialize.toast('Item in cart paid failed!', 4000,'light-blue')
        this.props.resetValidator()
      }
    }

  }
  render() {
    let total = 0
    let price = 0;
    let products = this.props.products
    this.props.cart.forEach(function(data){
      price+= products.find((product) => product.id === data.product).price*data.quantity
      total+=data.quantity
    })
    let select_method = this.props.select_method
    let select_address = this.props.select_address
    let address = this.props.address.find((address) => address.id === parseInt(select_address))
    let method = this.props.paymentMethods.find((method)=> method.id === parseInt(select_method))
    return (
      <div>
        <Row>
          <Col s={12} m={6}>
            <h6>Payment Method : </h6><a>{method.name}</a>
          </Col>
          <Col s={12} m={6}>
            <Row></Row>
            <h6>Derivered Address : </h6><a>{address.address_number} {address.village} {address.road} {address.sub_distinct} {address.distinct} {address.province} {address.country} {address.zipcode}</a>
          </Col>
        </Row>
        <Row>
          <Table>
            <thead>
              <tr>
                <th data-field="id">Product Name</th>
                <th data-field="name">Quantity</th>
                <th data-field="price">Price</th>
                <th data-field="delete"></th>
              </tr>
            </thead>

            <tbody>
              {this.props.cart.map((item) =>
                (<CartInfo
                  key={item.id}
                  quantity = {item.quantity}
                  {...item}
                  />)
              )}
              <tr>
                <td className="bold">Total</td>
                <td className="bold">{total}</td>
                <td className="bold">{price}฿</td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <Row>
          <Col s={12}>
            <Button waves="light" className="left" onClick={this.props.back}>Back</Button>
            <Button waves="light" className="right" onClick={(e)=>this.onConfirm(e)}>Confirm</Button>
          </Col>
        </Row>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    payItemInCart: (data,token)=>{
      dispatch(payItemInCart(data,token))
    },
    logout:()=>{
      dispatch(logout())
    },
    loadValidator:()=>(
      dispatch(loadValidator())
    ),
    resetValidator:()=>(
      dispatch(resetValidator())
    )

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Summarize)

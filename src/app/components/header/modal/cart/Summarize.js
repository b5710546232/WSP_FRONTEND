import React, { Component } from 'react'
import {Modal,Button,Table,Row,Col} from 'react-materialize'
import {payItemInCart} from '../../../../actions/CartAction'
import {logout} from '../../../../actions/UserAction'
import {loadValidator,resetValidator} from '../../../../actions/ValidatorAction'
import {connect} from 'react-redux'
import CartInfo from './CartInfo'

class Summarize extends Component {

  constructor(props) {
    super(props);
    // this.state = {total_price:0}
  }

  onConfirm(e){
    e.preventDefault()
    let token = this.props.user.accessToken
    let data = {
      address:this.props.select_address,
      method: this.props.select_method
    }
    if(this.props.select_method===1){
      data = {
        address:this.props.select_address,
        method: 1
      }
      this.payCreditCard()
    }
    this.props.payItemInCart(data,token)
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

  payCreditCard(){
    $.ajax({
      "url": "https://api.sandbox.paypal.com/v1/payments/payment",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "authorization": "Bearer "+this.props.credit_token,
      },
      "data": JSON.stringify({
        intent: "sale",
        payer: {
          payment_method: "credit_card",
          funding_instruments: [
            {
              credit_card: {
                number: this.props.credit_data.number,
                type: this.props.credit_data.type,
                expire_month: this.props.credit_data.expire_month,
                expire_year: this.props.credit_data.expire_year,
                cvv2: this.props.credit_data.cvv2,
                first_name: this.props.credit_data.first_name,
                last_name: this.props.credit_data.last_name
              }
            }
          ]
        },
        transactions: [
          {
            amount: {
              total: this.total_price *0.028,
              currency: "USD"
            },
            description: ""
          }
        ]
      })
    })
  }

  render() {
    let total = 0
    let price = 0;
    let products = this.props.products
    this.props.cart.forEach(function(data){
      price+= products.find((product) => product.id === data.product).price*data.quantity
      total+=data.quantity
    })
    this.total_price = price
    let select_method = this.props.select_method
    let select_address = this.props.select_address
    let address = this.props.address.find((address) => address.id === parseInt(select_address))
    let method = this.props.paymentMethods.find((method)=> method.id === parseInt(select_method))

    return (
      <div>
        <Row>
          <Col s={12} m={6}>
            { this.props.select_method===1?<span><h6>Credit Card : </h6><a>{this.props.credit_data.type}</a></span>
            : <span><h6>Payment Method : </h6><a>{method.name}</a></span>
            }
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

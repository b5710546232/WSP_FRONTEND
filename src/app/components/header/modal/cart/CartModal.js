import React, { Component } from 'react'
import {Modal,Button,Table} from 'react-materialize'
import CartInfo from './CartInfo'
import {loadCartList} from '../../../../actions/CartAction'
import {loadProductList} from '../../../../actions/ProductAction'
import {connect} from 'react-redux'
import PaymentInfo from './PaymentInfo'
import Summarize from './Summarize'
class CartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {cart_info:true,payment_info:false,summarize:false};
    this.total = 0
    this.onCart = this.toCart.bind(this)
  }
  toPayment(){
    this.setState({cart_info:false,payment_info:true,summarize:false})
  }
  componentDidMount(){
    let token = this.props.user.accessToken
    this.props.loadCartList(token)
    this.props.loadProductList()
    this.total = this.props.cart.length
  }
  shouldComponentUpdate(nextProps){
    return this.props.cart !== nextProps
  }
  toCart(){
    console.log("Change State");
    console.log(this.state);
    this.setState({cart_info:true,payment_info:false,summarize:false})
  }
  toConfirm(select_address,select_method){
    this.setState(
      {
        cart_info:false,
        payment_info:false,
        summarize:true,
        select_address:select_address,
        select_method:select_method
      })
  }
  toPayment(){
    this.setState({cart_info:false,payment_info:true,summarize:false})
  }
  close(){
    this.setState({cart_info:true,payment_info:false,summarize:false})
  }
  render() {
    let total = 0
    let price = 0;
    let products = this.props.products
    this.props.cart.forEach(function(data){
      price+= products.find((product) => product.id === data.product).price*data.quantity
      total+=data.quantity
    })

    return (
      <Modal
        header="Cart"
        trigger={
          <Button waves='light' className="space-button" >Cart {total}</Button>
        }
        id="cart_modal"
        >
        {this.state.cart_info?
          <div>
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
                    editable={true}
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
            {total!=0? <Button waves="light" onClick={()=>this.toPayment()}>Pay</Button>:<div></div>}
          </div>:<div></div>
        }
        {this.state.payment_info?
          <PaymentInfo
            back={this.onCart}
            confirm={this.toConfirm.bind(this)}
            />:<div></div>
        }
        {this.state.summarize?
          <Summarize
            select_method={this.state.select_method}
            select_address={this.state.select_address}
            back={this.toPayment.bind(this)}
            close={this.close.bind(this)}
            />:<div></div>
        }
      </Modal>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadCartList: (token) => {
      dispatch(loadCartList(token))
    },
    loadProductList:()=>{
      dispatch(loadProductList())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartModal)

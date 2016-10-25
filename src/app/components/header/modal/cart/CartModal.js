import React, { Component } from 'react'
import {Modal,Button,Table} from 'react-materialize'
import CartInfo from './CartInfo'
import {loadCartList} from '../../../../actions/CartAction'
import {loadProductList} from '../../../../actions/ProductAction'
import {connect} from 'react-redux'
import PaymentInfo from './PaymentInfo'
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
  render() {
    let total = this.props.cart.length
    return (
      <Modal
        header="Cart"
        trigger={
          <Button waves='light'>Cart {total}</Button>
        }
        >
        {this.state.cart_info?
          <div>
            <Table>
              <thead>
                <tr>
                  <th data-field="id">Product Name</th>
                  <th data-field="name">Quantity</th>
                  <th data-field="price">Price</th>
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
              </tbody>
            </Table>
            <Button waves="light" onClick={()=>this.toPayment()}>Pay</Button>
          </div>:<div></div>
        }
        {this.state.payment_info?
          <PaymentInfo
            back={this.onCart}
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
